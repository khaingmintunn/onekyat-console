<template>
  <div class="animated fadeIn">
    <div id="Dashboard">
      <!-- slider -->
      <b-row>
        <b-col md="12" lg="12">
          <b-card header-tag="header" footer-tag="footer">
            <div>
              <!-- Barousel -->
              <b-carousel
                id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                indicators
                background="#ababab"
                :interval="2000"
                img-width="512"
                img-height="240"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
              >
                <div v-for="slider_image in slider_images" :key="slider_image">
                  <b-carousel-slide :img-src="slider_image_path+slider_image"></b-carousel-slide>
                </div>
              </b-carousel>
              <!-- Barousel -->
            </div>
          </b-card>
        </b-col>
      </b-row>
      <!-- slider -->

      <!-- Type of Product -->
      <h5 class="header">Type of product</h5>
      <b-row>
        <b-col sm="2" v-for="product_type in product_types" :key="product_type.label">
          <b-card class="ads-card" @click="chooseProduct(product_type.label)">
            <div class="h4 text-success text-center mb-4">
              <i :class="product_type.image"></i>
            </div>
            <div class="text-center">{{product_type.label}}</div>
          </b-card>
        </b-col>
      </b-row>
      <!-- Type of Product -->

      <!-- Priority Categories -->
      <b-row>
        <b-col>
          <b-card>
            <h5 class="header">
              Selected Priority Categories
              <span
                class="update-catrgory"
                @click="showCategoryDialog()"
              >Update</span>
            </h5>
            <span v-for="category in selected_prority_categories" :key="category">
              <span class="selected-category">{{category}}</span>
            </span>
          </b-card>
        </b-col>
      </b-row>
      <!-- Priority Categories -->

      <h5 class="header">Suggested for you</h5>
      <!-- Products -->
      <b-row>
        <b-col sm="2" v-for="(product, index) in products" :key="product.id">
          <b-card class="ads-card">
            <div class="h4 m-0">
              <i
                :class="is_loves[index] ? 'fa fa-heart fa-lg product-green-love': 'fa fa-heart fa-lg mt-4 product-white-love'"
                @click="checkLove(index)"
              ></i>
              <img :src="product.image" style="width:100%; height: 50%;" @click="gotoAdsDetails()" />
            </div>
            <div class="product-description" @click="gotoAdsDetails()">{{product.description}}</div>
            <div @click="gotoAdsDetails()">{{product.price}} Kyat</div>
          </b-card>
        </b-col>
      </b-row>
      <!-- Products -->

      <!-- floating sell button -->
      <b-col sm="1" class="mb-3 mb-xl-0 float-sell-button">
        <b-button
          pressed
          block
          variant="success"
          class="btn-pill"
          aria-pressed="true"
          @click="openCameraAndUpload()"
        >
          <i class="fa fa-camera fa-lg"></i> SELL
        </b-button>
      </b-col>
      <!-- floating sell button -->

      <!-- Categories modal box -->
      <b-modal
        modal-class="sm-modal modal-box"
        ref="categoryModalRef"
        hide-footer
        hide-header-close
        title="Choose Category"
      >
        <div
          v-for="product_type in product_types"
          :key="product_type.label"
          class="product-modal-div ml-4 mr-4"
        >
          <input
            type="checkbox"
            v-model="selected_prority_categories"
            :value="product_type.label"
            :id="product_type.label"
          />
          <label :for="product_type.label" class="product-modal-label ml-4">{{product_type.label}}</label>
        </div>
      </b-modal>
      <!-- Categories modal box -->
    </div>
  </div>
</template>

<script>
import {
  slider_images,
  product_types,
  products,
} from "../static_database/database";
export default {
  name: "dashboard",
  data() {
    return {
      slide: 0,
      sliding: null,
      slider_images,
      product_types,
      products,
      slider_image_path: "img/sliders/",
      is_loves: [],
      selected_prority_categories: [],
    };
  },
  mounted() {
    this.products.map(() => {
      this.is_loves.push(parseFloat(false));
    });
  },
  computed: {},
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
    checkLove(index) {
      this.is_loves[index] = this.is_loves[index] ? false : true;
    },
    chooseProduct(label) {
      alert('You choose ' + label)
    },
    openCameraAndUpload() {
      alert("Camera will open and upload.");
    },
    gotoAdsDetails() {
      alert("Will go to Ads Detail Pages.");
    },
    showCategoryDialog() {
      this.$refs.categoryModalRef.show();
    },
  },
};
</script>

<style scoped>
.header {
  padding-left: 5px;
  font-family: "Times New Roman", Times, serif;
  border-left: 6px solid #75b29e;
}

.ads-card {
  cursor: pointer;
}

.update-catrgory {
  color: #75b29e;
  float: right;
  cursor: pointer;
}

.selected-category {
  padding: 0 10px;
  margin: 3px;
  color: #fff;
  background-color: #3a9d5d;
  border-radius: 5px;
  font-size: 12px;
  line-height: 30px;
}

.product-modal-label {
  font-family: "Times New Roman", Times, serif;
  font-size: 16px;
  font-weight: bold;
}

.float-sell-button {
  color: #fff;
  position: fixed;
  float: right;
  right: 2%;
  z-index: 1;
  bottom: 2%;
}
</style>
