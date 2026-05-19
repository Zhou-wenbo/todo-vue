const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  // 从请求头获取 Authorization 字段
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: '未提供认证令牌' });
  }

  const token = authHeader.split(' ')[1]; // 修正：按空格分割
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (err) {
    return res.status(401).json({ message: '令牌无效或已过期' });
  }
};