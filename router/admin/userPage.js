const pagination = require('mongoose-sex-page');
const { User } = require('../../model/user');
module.exports = async(req, res) => {

    req.app.locals.currentLink = 'user';
    let page = req.query.page;

    // // 接收客户端传递过来的当前页参数
    // let page = req.query.page || 1;
    // // 每一页显示的数据条数
    // let pagesize = 10;
    // // 查询用户数据的总数
    // // 集合构造函数提供的查询数据库中数据条数的方法
    // let count = await User.countDocuments({});
    // // 总页数
    // let total = Math.ceil(count / pagesize);

    // // 页码对应的数据查询开始位置
    // let start = (page - 1) * pagesize;

    // 将用户信息从数据库中查询出来
    // let users = await User.find({}).limit(pagesize).skip(start);
    let users = await pagination(User).find().page(page).size(6).display(3).exec();
    // 渲染用户列表模块
    // res.send(users);
    res.render('admin/user', {
        users: users,
        // page: page,
        // total: total
    });
}