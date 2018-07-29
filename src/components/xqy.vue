<template>
    <div>
        <div class="section">
            <div class="location">
                <span>当前位置：</span>
                <a href="/index.html">首页</a> &gt;
                <a href="/goods.html">购物商城</a> &gt;
                <a href="/goods/42/1.html">商品详情</a>
            </div>
        </div>
        <div class="section">
            <div class="wrapper clearfix">
                <div class="wrap-box">
                    <div class="left-925">
                        <div class="goods-box clearfix">
                            <div class="pic-box">
                                <div class="magnifier" id="magnifier1" style="width: 500px;">
                                    <div class="magnifier-container" style="width: 500px; height: 500px;">
                                        <div class="images-cover">
                                            <img src="images/1.png" width="500" height="375" style="top:50%;margin-top:-187.5px">
                                        </div>

                                        <div class="move-view" style="width: 100px; height: 100px; left: 256px; top: 150px; display: none;"></div>

                                    </div>
                                    <div class="magnifier-assembly">
                                        <div class="magnifier-btn">
                                            <span class="magnifier-btn-left">&lt;</span>
                                            <span class="magnifier-btn-right">&gt;</span>
                                        </div>

                                        <div class="magnifier-line">
                                            <ul class="clearfix animation03">
                                                <li class="active">
                                                    <div class="small-img">
                                                        <img src="images/1.png">
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="small-img">
                                                        <img src="images/2.png">
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="small-img">
                                                        <img src="images/3.png">
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="small-img">
                                                        <img src="images/4.png">
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="small-img">
                                                        <img src="images/1.png">
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>
                                    <div class="magnifier-view" style="width: 500px; height: 500px; display: none;">
                                        <img src="images/1.png" width="2500" height="1875" style="margin-left: -1280px; margin-top: -437.5px;">
                                    </div>

                                </div>
                            </div>
                            <div class="goods-spec">
                                <h1>{{goodsinfo.title}}</h1>
                                <p class="subtitle">{{goodsinfo.sub_title}}</p>
                                <div class="spec-box">
                                    <dl>
                                        <dt>货号</dt>
                                        <dd id="commodityGoodsNo">{{goodsinfo.goods_no}}</dd>
                                    </dl>
                                    <dl>
                                        <dt>市场价</dt>
                                        <dd>
                                            <s id="commodityMarketPrice">¥{{goodsinfo.market_price}}</s>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt>销售价</dt>
                                        <dd>
                                            <em id="commoditySellPrice" class="price">¥{{goodsinfo.sell_price}}</em>
                                        </dd>
                                    </dl>
                                </div>
                                <div class="spec-box">
                                    <dl>
                                        <dt>购买数量</dt>
                                        <dd>
                                            <div class="stock-box">
                                                <div class="el-input-number el-input-number--small">
                                                    <span role="button" class="el-input-number__decrease is-disabled">
                                                        <i class="el-icon-minus"></i>
                                                    </span>
                                                    <span role="button" class="el-input-number__increase">
                                                        <i class="el-icon-plus"></i>
                                                    </span>
                                                    <div class="el-input el-input--small">
                                                        <!---->
                                                        <input autocomplete="off" size="small" type="text" rows="2" max="60" min="1" validateevent="true" class="el-input__inner"
                                                            role="spinbutton" aria-valuemax="60" aria-valuemin="1" aria-valuenow="1"
                                                            aria-disabled="false">
                                                        <!---->
                                                        <!---->
                                                        <!---->
                                                    </div>
                                                </div>
                                            </div>
                                            <span class="stock-txt">
                                                库存
                                                <em id="commodityStockNum">{{goodsinfo.stock_quantity}}</em>件
                                            </span>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dd>
                                            <div id="buyButton" class="btn-buy">
                                                <button onclick="cartAdd(this,'/',1,'/shopping.html');" class="buy">立即购买</button>
                                                <button onclick="cartAdd(this,'/',0,'/cart.html');" class="add">加入购物车</button>
                                            </div>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                        <div id="goodsTabs" class="goods-tab bg-wrap">
                            <div id="tabHead" class="tab-head" style="position: static; top: 517px; width: 925px;">
                                <ul>
                                    <li>
                                        <a href="javascript:;" class="selected">商品介绍</a>
                                    </li>
                                    <li>
                                        <a href="javascript:;">商品评论</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="tab-content entry" style="display: block;">
                                内容
                            </div>
                            <div class="tab-content" style="display: block;">
                                <div class="comment-box">
                                    <div id="commentForm" name="commentForm" class="form-box">
                                        <div class="avatar-box">
                                            <i class="iconfont icon-user-full"></i>
                                        </div>
                                        <div class="conn-box">
                                            <div class="editor">
                                                <textarea id="txtContent" name="txtContent" sucmsg=" " datatype="*10-1000" nullmsg="请填写评论内容！"></textarea>
                                                <span class="Validform_checktip"></span>
                                            </div>
                                            <div class="subcon">
                                                <input @click="submitComment" id="btnSubmit" name="submit" type="submit" value="提交评论" class="submit">
                                                <span class="Validform_checktip"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <ul id="commentList" class="list-box">
                                        <p style="margin: 5px 0px 15px 69px; line-height: 42px; text-align: center; border: 1px solid rgb(247, 247, 247);">暂无评论，快来抢沙发吧！</p>
                                        <li>
                                            <div class="avatar-box">
                                                <i class="iconfont icon-user-full"></i>
                                            </div>
                                            <div class="inner-box">
                                                <div class="info">
                                                    <span>匿名用户</span>
                                                    <span>2017/10/23 14:58:59</span>
                                                </div>
                                                <p>testtesttest</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="avatar-box">
                                                <i class="iconfont icon-user-full"></i>
                                            </div>
                                            <div class="inner-box">
                                                <div class="info">
                                                    <span>匿名用户</span>
                                                    <span>2017/10/23 14:59:36</span>
                                                </div>
                                                <p>很清晰调动单很清晰调动单</p>
                                            </div>
                                        </li>
                                    </ul>
                                    <div class="page-box" style="margin: 5px 0px 0px 62px;">
                                        <div id="pagination" class="digg">
                                            <span class="disabled">« 上一页</span>
                                            <span class="current">1</span>
                                            <span class="disabled">下一页 »</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="left-220">
                        <div class="bg-wrap nobg">
                            <div class="sidebar-box">
                                <h4>推荐商品</h4>
                                <ul class="side-img-list">
                                    <li v-for="(item, index) in hotgoodslist" :key="item.id">
                                        <div class="img-box">
                                            <router-link :to="`/goodsInfo/`+item.id">
                                                <img :src="item.img_url">
                                            </router-link>
                                        </div>
                                        <div class="txt-box">
                                            <router-link :to="`/goodsInfo/`+item.id">{{item.title}}</router-link>
                                            <span>{{item.add_time | cutTime}}</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "xqy",
        data: function () {
            return {
                goodsinfo: {},
                hotgoodslist: [],
                imglist: []
            };
        },
        methods: {
            // 抽取的公共的方法 根据id 获取数据
            getgoodsInfo() {
                this.axios
                    .get(`site/goods/getgoodsinfo/${this.$route.params.id}`)
                    .then(response => {
                        this.goodsinfo = response.data.message.goodsinfo;
                        this.hotgoodslist = response.data.message.hotgoodslist;
                        this.imglist = response.data.message.imglist;
                    })
                    .catch(err => {
                        // console.log(err);
                    });
            },
            submitComment(){
             this.$Message.error('对方不想说话并向你抛出一吨bug');   
            }
        },
        // 在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。
        // 这个生命周期函数中 data methods 中的那些值 还没有设置给 这个组件对象
        beforeCreate() {
            //   console.log(this);
            //   this.getgoodsInfo();
        },
        // 在实例创建完成后被立即调用。
        created() {
            // console.log("created");
            console.log(this);
            this.getgoodsInfo();
        },
        // beforeMount
        beforeMount() { },
        // 显示出来之后 打印$route
        mounted() {
            // console.log(this.$route);
            // console.log(this.$route.params.id);
            // console.log(this.$route.query.id);
        },
        // 观察属性 属性值改变时自动调用
        watch: {
            // to 新值  from 老值
            $route(to, from) {
                // 对路由变化作出响应...
                console.log("我变了");
                //   console.log(to);
                //   console.log(from);
                this.getgoodsInfo();
                //   console.log(this);
            }
        }
    };
</script>

<style >
    @import url('../assets/statics/lib/zoom/css/magnifier.css');
</style>