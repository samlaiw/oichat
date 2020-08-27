<template>
	<div data-layout='__default'>
        <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-card class="title" dark>
        管理者：oic000
      </v-card>
      <v-card>
        會員管理
      </v-card>
      <v-list dense>
        <v-list-item link to="roster" @click="title = '會員名單'">
          <v-list-item-content>
            <v-list-item-title>會員名單</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="member-level" @click="title = '會員等級'">
          <v-list-item-content>
            <v-list-item-title>會員等級</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="reply" @click="title = '會員回覆'">
          <v-list-item-content>
            <v-list-item-title>會員回覆</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="send" @click="title = '發送訊息'">
          <v-list-item-content>
            <v-list-item-title>發送訊息</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="send-all" @click="title = '群發訊息'">
          <v-list-item-content>
            <v-list-item-title>群發訊息</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-card>
          文章管理
        </v-card>
        <v-list-item link to="article-List" @click="title = '文章總覽'">
          <v-list-item-content>
            <v-list-item-title>文章總覽</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="publish" @click="title = '發表文章'">
          <v-list-item-content>
            <v-list-item-title>發表文章</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="article-category" @click="title = '文章類別'">
          <v-list-item-content>
            <v-list-item-title>文章類別</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="article-draft" @click="title = '文章草稿'">
          <v-list-item-content>
            <v-list-item-title>文章草稿</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="aricle-schedule" @click="title = '文章排程'">
          <v-list-item-content>
            <v-list-item-title>文章排程</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="article-news" @click="title = '快訊管理'">
          <v-list-item-content>
            <v-list-item-title>快訊管理</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-card>
          留言管理
        </v-card>
        <v-list-item link to="message" @click="title = '留言總覽'">
          <v-list-item-content>
            <v-list-item-title>留言總覽</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="board" @click="title = '版塊管理'">
          <v-list-item-content>
            <v-list-item-title>版塊管理</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-card>
          廣告管理
        </v-card>
        <v-list-item link to="alladvertising" @click="title = '廣告總覽'">
          <v-list-item-content>
            <v-list-item-title>廣告總覽</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="addadvertising" @click="title = '上架編輯'">
          <v-list-item-content>
            <v-list-item-title>上架編輯</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-card>
          兌換管理
        </v-card>
        <v-list-item link to="reward" @click="title = '獎勵總覽'">
          <v-list-item-content>
            <v-list-item-title>獎勵總覽</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="addreward" @click="title = '新增獎勵'">
          <v-list-item-content>
            <v-list-item-title>新增獎勵</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn block dark link to="login" @click="title = '登入'">登出</v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
    </v-app-bar>
      <v-main>
        <nuxt />
      </v-main>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; {{ new Date().getFullYear() }} 星翔數位</span>
    </v-footer>
  </v-app>
	</div>
</template>

<script>
    import navbar from "~/components/dashboardNavbar.vue";

    export default {
		components: {
            vNavbar: navbar
    },
    props: {
      source: String,
    },
    data() {
      return {
        drawer: null,
        title: ''
      }
    }

	}
</script>

<style lang="scss">
  .v-card{
    color: grey;
    height: 25px;
    line-height: 25px;
  }
  .title{
     height: 65px;
     line-height: 65px;
  }
  </style>
