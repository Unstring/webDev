// node ycCount.js

// npm init -y
// npm install puppeteer.


const puppeteer = require('puppeteer')

async function count () {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://news.ycombinator.com', {waitUntil: 'networkidle2'})
  await page.evaluate(_ => {
    window.scrollBy(0, window.innerHeight)
  })

  console.log('how many?', (await page.$$('td.title')).length)

  await browser.close()
}

count();