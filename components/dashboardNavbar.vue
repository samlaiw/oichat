<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-card dark height="65px" line-height="65px">
        管理者：oic000
      </v-card>
      <v-card>
        會員管理
      </v-card>
      <v-list dense>
        <v-list-item link to="roster">
          <v-list-item-content>
            <v-list-item-title>會員名單</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="member-level">
          <v-list-item-content>
            <v-list-item-title>會員等級</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="reply">
          <v-list-item-content>
            <v-list-item-title>會員回覆</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="send">
          <v-list-item-content>
            <v-list-item-title>發送訊息</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="send-all">
          <v-list-item-content>
            <v-list-item-title>群發訊息</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-card>
          文章管理
        </v-card>
        <v-list-item link to="article-List">
          <v-list-item-content>
            <v-list-item-title>文章總覽</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="publish">
          <v-list-item-content>
            <v-list-item-title>發表文章</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="article-category">
          <v-list-item-content>
            <v-list-item-title>文章類別</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="article-draft">
          <v-list-item-content>
            <v-list-item-title>文章草稿</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="aricle-schedule">
          <v-list-item-content>
            <v-list-item-title>文章排程</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-card>
          留言管理
        </v-card>
        <v-list-item link to="article-news">
          <v-list-item-content>
            <v-list-item-title>快訊管理</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="message">
          <v-list-item-content>
            <v-list-item-title>留言總覽</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-card>
          廣告管理
        </v-card>
        <v-list-item link to="board">
          <v-list-item-content>
            <v-list-item-title>版塊管理</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="alladvertising">
          <v-list-item-content>
            <v-list-item-title>廣告總覽</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-card>
          兌換管理
        </v-card>
        <v-list-item link to="reward">
          <v-list-item-content>
            <v-list-item-title>獎勵總覽</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="addreward">
          <v-list-item-content>
            <v-list-item-title>新增獎勵</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn block dark>登出</v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col class="text-center">
            <v-tooltip left>
              <template v-slot:activator="{ on }">
                <v-btn :href="source" icon large target="_blank" v-on="on">
                  <v-icon large>mdi-code-tags</v-icon>
                </v-btn>
              </template>
              <span>Source</span>
            </v-tooltip>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; {{ new Date().getFullYear() }} 星翔數位</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),
  }

</script>

<style lang="scss">
  .v-navigation-drawer {
    height: 100%;
  }

  .v-card {
    height: 30px;
    text-align: center;
    margin: 0px;
    line-height: 30px;

  }

  .v-list-item-title {
    text-align: center;
  }

</style>
