const express = require('express');
const path = require('path');

const app = express();
const PORT = 3001;

// 基础配置
app.use(express.json());
app.use(express.static(__dirname));

// 健康检查
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'AI智能获客系统后端已启动'
  });
});

// 前后端测试
app.post('/api/test', (req, res) => {
  res.json({
    success: true,
    message: '前后端数据交互成功',
    data: req.body
  });
});

// 模拟客户搜索
app.post('/api/search', (req, res) => {
  const { keyword } = req.body;

  if (!keyword) {
    return res.status(400).json({
      success: false,
      message: '请输入搜索关键词'
    });
  }

  res.json({
    success: true,
    keyword: keyword,
    total: 2,
    results: [
      {
        name: '模拟客户A',
        demand: keyword + '相关需求',
        intention: '高意向'
      },
      {
        name: '模拟客户B',
        demand: keyword + '采购咨询',
        intention: '中意向'
      }
    ]
  });
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`系统已启动：http://localhost:${PORT}`);
});