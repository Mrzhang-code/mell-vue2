<template>
    <div class="params-info" v-if="paramsInfo.rule && paramsInfo.info">
        <div v-if="paramsInfo.rule.tables !== undefined">
            <table v-for="(table, index) in paramsInfo.rule.tables" :key="index">
            <tr v-for="(item,i1) in table" :key="i1+'item'">
                <td v-for="(i,i2) in item" :key="i2+'item'">{{i}}</td>
            </tr>
        </table>
        </div>
        <table v-for="(item, i3) in paramsInfo.info.set" :key="i3">
            <tr>
                <td class="set-key">{{item.key}}</td>
                <td class="set-fs">{{item.value}}</td>
            </tr>
        </table>

    </div>
</template>

<script>
export default {
    props: {
        paramsInfo: {
            type: Object,
            default() {
                return {
                    rule:'',
                    info:''
                }
            }
        }
    }
}
</script>

<style scoped>
/* .rule{
    margin: 10px;
    font-size: 14px;

}
.rule table{
    width: 100%;
    border-collapse: collapse;
}
.rule table th{
    height: 42px;
} */

.params-info {
    padding: 20px 15px;
    font-size: 14px;
    border-bottom: 5px solid #f2f5f8;
  }

  .params-info table {
    width: 100%;
      /* border: 1px solid red; */

    border-collapse: collapse;
  }

  .params-info table tr {
    height: 42px;
  }

  .params-info table tr td {
      /* border-right: 1px solid red; */
    border-bottom: 1px solid rgba(100,100,100,.1);
  }

  .set-key {
      width: 95px;
  }
  .set-fs{
        color: #eb4868
  }
  .info-img img {
    width: 100%;
  }
</style>