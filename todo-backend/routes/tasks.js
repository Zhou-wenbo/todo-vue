const express=require('express');
const router=express.Router();
const auth=require('../middleware/auth');
const {getTasks,createTask,updateTask,deleteTask}=require('../controllers/taskController');



//所有任务路由都需要认证
router.use(auth);
router.get('/',getTasks);
router.post('/',createTask);
router.put('/:id',updateTask);
router.delete('/:id',deleteTask);


module.exports=router;