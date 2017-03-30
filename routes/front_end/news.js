/**
 * Created by Mahao on 2017/3/30.
 */
import controller from '../tools/controllers'
export default class extends controller {
	renders() {

		// 公司新闻路由
		this.router.get('/news/company', async(ctx, next) => {
			ctx.state = {
				title: '成功了'
			};
			// await this.DBModule.Users.saveUser(user);
			await ctx.render('./front_end_jade/front_end_news/company_news')
		});

		// 行业新闻路由
		this.router.get('/news/industry', async(ctx, next) => {
			ctx.state = {
				title: '成功了',
				dataTotal: 10,
				total: 12
			};
			// await this.DBModule.Users.saveUser(user);
			await ctx.render('./front_end_jade/front_end_news/industry_news')
		});

		// 新闻详情路由
		this.router.get('/news/detail?', async(ctx, next) => {
			ctx.state = {
				title: '成功了'
			};
			// await this.DBModule.Users.saveUser(user);
			await ctx.render('./front_end_jade/front_end_news/detail_news')
		});
	}

	actions() {

	}
}
