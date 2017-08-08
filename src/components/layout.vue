<template>
	<div class="layout">
		<div class="app-head">
			<div class="app-head-inner">
				<router-link :to="{path: '/'}">
					<img class="head-logo" src="../assets/logo.png">
				</router-link>
				<div class="head-nav">
					<ul class="nav-list">
						<li>{{username}}</li>
						<li v-if="username!==''" class="nav-pile">|</li>
						<li v-if="username!==''" @click=" ">退出</li>
						<li v-if="username===''" @click="logClick">登录</li>
						<li v-if="username===''" class="nav-pile">|</li>
						<li v-if="username===''" @click="regClick">注册</li>
						<li class="nav-pile">|</li>
						<li @click="aboutClick">关于</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="app-content">
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</div>
		<div class="app-foot">
			<p>©2016 fishenal MIT</p>
		</div>
		<MyDialog :isShow="isShowAboutDialog" @on-close="closeDialog('isShowAboutDialog')">
			<p>本报告在调研数据的基础上，采用定性与定量相结合的方式深入分析了专车市场发展的驱动因素与阻碍因素、专车市场背后的产业格局、专车企业的竞争格局、用户对专车市场的依赖程度、专车对其他交通工具运力的补充效应等，通过这五个章节的研究反映专车市场的发展态势和面临的问题。报告力求客观、深入、准确地反映中国专车市场发展情况，为政府、企事业单位和社会各界提供决策依据。</p>
		</MyDialog>
		<MyDialog :isShow="isShowLogDialog" @on-close="closeDialog('isShowLogDialog')">
			<!-- <p>other log </p> -->
			<LogForm @has-log="onSuccessLog"></LogForm>
		</MyDialog>
		<MyDialog :isShow="isShowRegDialog" @on-close="closeDialog('isShowRegDialog')">
			<!-- <p>other reg</p> -->
			<RegForm></RegForm>
		</MyDialog>
	</div>
</template>

<script>
import Dialog from '@/components/base/dialog';
import LogForm from '@/components/logForm';
import RegForm from '@/components/regForm';
export default {
	components: {
		MyDialog: Dialog,
		LogForm,
		RegForm
	},
	data() {
		return {
			isShowAboutDialog: false,
			isShowLogDialog: false,
			isShowRegDialog: false,
			username: ''
		};
	},
	methods: {
		aboutClick() {
			this.isShowAboutDialog = true;
		},
		regClick() {
			this.isShowRegDialog = true;
		},
		logClick() {
			this.isShowLogDialog = true;
		},
		closeDialog(attr) {
			this[attr] = false;
		},
		onSuccessLog(data) {
			this.closeDialog('isShowLogDialog');
			console.log(data);
			this.username = data.data.username;
		},
		quit() {

		}
	}
};
</script>

<style rel="stylesheet/less" lang="less">
@import '../common/less/index';
.layout{
	background: #EEF0F2;
}
.app-head{
	background: #363636;
	color: #b2b2b2;
	height: 90px;
	line-height: 90px;
	width: 100%;
	&-inner{
		width: 1200px;
		margin: 0 auto;
	}
	.head-logo{
		float: left;
		width: 50px;
		margin-top: 20px;
	}
	.head-nav{
		float: right;
		height: 90px;
		ul{
			overflow: hidden;
			margin: 0 auto;
		}
		li{
			cursor: pointer;
			list-style: none;
			float: left;
		}
		.nav-pile{
			padding: 0 10px;
		}
	}
}
.app-content{
	background: #EEF0F2;
}
.app-foot{
	text-align: center;
	height: 80px;
	line-height: 80px;
	width: 100%;
	background: #dcdcdc;
	clear: both;
	margin-top: 30px;
}
</style>