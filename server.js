const express = require('express')
const fs = require('fs')
const bodyParser = require('body-parser')// body-parser中间件来解析请求体
const { json } = require('body-parser')

var app = express()

// 运用跨域的中间件
var allowCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*') // 自定义中间件，设置跨域需要的响应头。
  next()
}
app.use(allowCrossDomain)

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// 设置模板
app.set('views', 'nodeViews')
app.set('view engine', 'html')
app.engine('html', require('ejs-mate'))

// 设置路由
app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there333!' })
})

//
app.post('/get-nav-data-list', function (req, res) {
  fs.readFile('public/mock/NavDataList.json', 'utf-8', function (err, data) {
    if (err) {
      res.send({
        code: '-1',
        message: '读取文件失败',
        data: {},
        success: 0
      })
    } else {
      res.send(data)
    }
  })
})

app.post('/get-long-list-by-city', function (req, res) {
  const body = req.body || {}
  const id = body.id || 0
  fs.readFile('public/mock/FloorOneData.json', 'utf-8', function (err, data) {
    if (err) {
      res.send({
        code: '-1',
        message: '读取文件失败',
        data: {},
        success: 0
      })
    } else {
      const parseData = JSON.parse(data) || {}
      const allCityData = parseData.data || []
      for (let index = 0; index < allCityData.length; index++) {
        const element = allCityData[index]
        if (+id === +element.id) {
          res.send(element)
          break
        }
      }
    }
  })
})

var server = app.listen(3001, function () {
  var host = server.address().address
  var port = server.address().port
  console.log('Example app listening at ', host, port)
})
