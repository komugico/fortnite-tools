import time
import json
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
import chromedriver_binary
from bs4 import BeautifulSoup

def scrape():
    urllist = get_urllist()
    data = {
        "quests": []
    }
    for idx, url in enumerate(urllist):
        soup = get_html_as_soup(url)
        if soup:
            quest = analyze_soup(soup, idx)
            data["quests"].append(quest)
    with open("questlist.json", mode="wt", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=4)

def get_urllist():
    urllist = []
    with open("urllist.txt", encoding="UTF-8") as f:
        for line in f:
            urllist.append(line)
    return urllist

def get_html_as_soup(url):
    soup = None
    # ブラウザ非表示モードでChromeのドライバを立ち上げる
    options = Options()
    options.add_argument('--headless')
    driver = webdriver.Chrome(options=options)
    try:
        # 取得先URLにアクセスしてソース取得
        driver.get(url)
        time.sleep(5)
        html = driver.page_source
        # BeautifulSoupに変換
        soup = BeautifulSoup(html, "html.parser")
    finally:
        driver.quit()
        return soup

def analyze_soup(soup, idx):
    questName = soup.find_all(class_="_main")[0].text
    markers = get_markers(soup)
    return {
        "id": idx,
        "questName": questName,
        "markers": markers,
    }

def get_markers(soup):
    markers = []

    # 子要素の取得
    bs_overlay = soup.find_all(class_="leaflet-image-layer leaflet-zoom-animated")[0]
    bs_markers = soup.find_all(class_="leaflet-pane leaflet-marker-pane")[0].children
    bs_places = soup.find_all(id=lambda value: value and value.startswith("place"))
    bs_images = soup.find_all(class_="w-article-img article-img-zoom-wrap")

    # オフセット値の取得
    ox, oy, _ = bs_overlay['style'].split("translate3d(")[1].split(")")[0].split(",")
    ox = int(ox.split("px")[0])
    oy = int(oy.split("px")[0])

    # 画面幅と画面高さの取得
    w = int(bs_overlay['style'].split("width:")[1].split(";")[0].split("px")[0])
    h = int(bs_overlay['style'].split("height:")[1].split(";")[0].split("px")[0])

    # 解析
    for idx, (bs_marker, bs_place, bs_image) in enumerate(zip(bs_markers, bs_places, bs_images)):
        # マーカー座標の取得
        x, y, _ = bs_marker['style'].split("translate3d(")[1].split(")")[0].split(",")
        x = int(x.split("px")[0]) - ox
        y = int(y.split("px")[0]) - oy
        # マーカーデータへの追加
        markers.append({
            "id": idx,
            "longtitude": x_to_longtitude(x, w),
            "latitude": y_to_latitude(y, h),
            "place": bs_place.text,
            "imageUrl": bs_image["href"]
        })
    return markers

# 座標から経度へ変換
def x_to_longtitude(x, w):
    return "{:.2f}".format((x - w / 2) / w * 180)

# 座標から緯度へ変換
def y_to_latitude(y, h):
    return "{:.2f}".format((y - h / 2) / h * 85)

if __name__ == "__main__":
    scrape()