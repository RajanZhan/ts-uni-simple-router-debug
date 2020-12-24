<!--
@author:
@description:首页。
 -->
<template>
  <view class="content">
    
    hello 

  </view>
</template>

<script lang="ts">
import { Component, Watch } from "vue-property-decorator";
import BaseComponent from "@/components/BaseComponent/BaseComponent";
import userService from "@/service/User.service";
import { UserInfo } from "@/interface/pages/index/index.page.interface";


@Component({
  components: {
    
  },
})
export default class Index extends BaseComponent {
  private title = "hello2dd1";

  async created() {
    console.log(await userService.test());
    console.log(this.bcc);
  }

  async mounted() {
   
  }

  async beforeDestroy() {
   
  }

  private async getUserInfo(): Promise<UserInfo> {
    return {
      id: 1,
    };
  }
}
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin: 200rpx auto 50rpx auto;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
