import { Builder, Browser, By, Key, until } from 'selenium-webdriver'
;(async function example() {
  // 实例化浏览器驱动
  let driver = await new Builder().forBrowser(Browser.CHROME).build()
  try {
    await driver.get('https://www.baidu.com') // 请求站点
    // 寻找元素,发送关键字后按回车
    await driver.findElement(By.id('kw')).sendKeys('煎蛋网', Key.RETURN)
    // 验证搜索是否成功
    await driver.wait(until.titleIs('煎蛋网_百度搜索'), 1000)
  } finally {
    // 先注释起来,不然调起的浏览器一闪而过,都看不到发生了什么
    // await driver.quit() // 退出
  }
})()
