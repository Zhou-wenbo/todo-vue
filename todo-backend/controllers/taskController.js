const prisma = require('../prisma');

exports.getTasks = async (req, res) => {
  try {
    const tasks = await prisma.task.findMany({
      where: { userId: req.userId },
      orderBy: { createdAt: 'desc' }
    });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: '获取任务失败', error: error.message });
  }
};

exports.createTask = async (req, res) => {
  try {
    const { text, dueDate, priority } = req.body;
    const task = await prisma.task.create({
      data: {
        text,
        userId: req.userId,
        dueDate: dueDate ? new Date(dueDate) : null,
        priority: priority || 'medium'
      }
    });
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: '创建任务失败', error: error.message });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const task = await prisma.task.findFirst({
      where: { id, userId: req.userId }
    });
    if (!task) return res.status(404).json({ message: '任务不存在或无权限' });
    const updated = await prisma.task.update({
      where: { id },
      data: updates
    });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: '更新任务失败', error: error.message });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await prisma.task.findFirst({
      where: { id, userId: req.userId }
    });
    if (!task) return res.status(404).json({ message: '任务不存在或无权限' });
    await prisma.task.delete({ where: { id } });
    res.json({ message: '任务已删除' });
  } catch (error) {
    res.status(500).json({ message: '删除任务失败', error: error.message });
  }
};