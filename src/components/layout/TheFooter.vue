<template>
  <section>
    <div class="container d-flex">
      <div class="image">
        <img
          src="@/assets/images/logo.png"
          alt="image"
          width="150"
          height="150"
        />
      </div>
      <div class="main_row d-flex">
        <div class="container_connect col-lg-4 col-md-6">
          <div class="connect">
            <div class="headset_icon col-md-3 col-xs-4">
              <v-icon icon="mdi-headset-dock"></v-icon>
            </div>
            <ul class="col-md-8 col-xs-8">
              <li>For inquiries ?Connect with us</li>
              <li>00966558882930</li>
            </ul>
          </div>
          <div class="icons">
            <h4>{{ $t("placeholder.contactInfo") }}</h4>
            <img src="@/assets/images/instagram.svg" alt="icon" />
            <img src="@/assets/images/twitter.svg" alt="icon" />
            <img src="@/assets/images/snapchat.svg" alt="icon" />
          </div>
        </div>
        <!-- first col  -->
        <div class="col-lg-2 col-md-6">
          <h6>{{ $t("footer.Quick") }}</h6>
          <ul>
            <router-link to=""> {{ $t("footer.CarGame") }}</router-link>
            <router-link to=""> {{ $t("footer.Intelligence") }}</router-link>
            <router-link to=""> {{ $t("footer.Strategy") }}</router-link>
          </ul>
        </div>
        <!-- second col -->
        <div class="col-lg-2 col-md-6 col-xs-12">
          <h6>{{ $t("footer.Information") }}</h6>
          <ul>
            <router-link to="/about"> {{ $t("navs.aboutUs") }}</router-link>
            <router-link to=""> {{ $t("footer.Privacy") }}</router-link>
            <router-link to=""> {{ $t("footer.Terms") }}</router-link>
            <router-link to=""> {{ $t("footer.Refund") }}</router-link>
            <router-link to=""> {{ $t("footer.Faq") }}</router-link>
          </ul>
        </div>
        <!-- third col -->
        <div class="col-lg-2 col-md-6 col-xs-12">
          <h6>{{ $t("footer.Account") }}</h6>
          <ul>
            <router-link to=""> {{ $t("footer.Account") }}</router-link>
            <router-link to=""> {{ $t("footer.Orders") }}</router-link>
            <router-link to="ShoppingCart">
              {{ $t("footer.Cart") }}</router-link
            >
            <router-link to="/Contact"> {{ $t("navs.contactUs") }}</router-link>
          </ul>
        </div>
        <!-- forth -->
      </div>
      <!-- main_row -->
    </div>
    <!-- container -->
    <footer>
      <div class="container">
        <div div class="logo_company">
          <div class="image">
            <div data-aos="fade-up" data-aos-delay="500">
              <div class="shape1"></div>
            </div>
            <div data-aos="fade-up" data-aos-delay="50">
              <div class="shape2"></div>
            </div>
            <div data-aos="fade-up" data-aos-delay="1000">
              <div class="logo">
                <img src="@/assets/images/waitbuzz-logo.svg" alt="logo" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <p>موقع العاب اطفال الكويت- All Rights Reserved</p>
        </div>
      </div>
      <!-- end container -->
    </footer>
  </section>
</template>
<style lang="scss" scoped>
section {
  background-color: var(--bg-color-light);
  margin-top: 130px;
  ul {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    padding-left: 0;
    margin-left: 0;
    a:hover {
      color: var(--color-yellow);
    }
  }
}
.container {
  flex-direction: column;
  row-gap: 30px;
  .image {
    align-self: flex-start;
    margin-top: -80px;
  }
  .main_row {
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    h6 {
      margin: 35px 0;
      font-size: 25px;
      @media (max-width: 480px) {
        & {
          font-size: 20px;
        }
      }
    }
    .container_connect {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      row-gap: 15px;
      .icons {
        h4 {
          text-align: center;
        }
        img {
          width: 50px;
          height: 50px;
          margin: 20px 10px;
          &:hover {
            transform: rotate(15deg);
            transition: all 0.5s ease-in-out;
          }
        }
      }
      .connect {
        display: flex;
        flex-direction: row;
        justify-content: center;
        // background-color: blueviolet;
        column-gap: 7px;
        align-items: center;
        // .headset_icon{
        // }
        .v-icon {
          font-size: 80px;
          // background-color: blue;
          color: var(--main-color);
          @media (max-width: 768px) {
            font-size: 60px;
          }
        }
        ul {
          line-height: 7px;
          & > :nth-child(1) {
            color: var(--gray-color);
            font-size: 13px;
          }
          & > :nth-child(2) {
            color: var(--main-color);
            font-size: 20px;
            font-weight: 500;
          }
        }
      }
    }
  }
}

footer {
  background-color: var(--color-yellow);
  padding: 20px 0;
  overflow: hidden;
  @media (max-width: 480px) {
    & {
      padding: 35px 0;
    }
  }
  .container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: 30px;
    justify-content: space-between;
    // @media (max-width: 480px) {
    //   & {
    //     background-color: #fd7e14;
    //   }
    // }
    .logo_company {
      height: 40px;
    }
    .image {
      margin-top: -10px;
      position: relative;
      .shape1,
      .shape2 {
        // content: "";
        position: absolute;
        width: 60px;
        height: 50px;
        clip-path: polygon(
          25% 0%,
          75% 0%,
          100% 50%,
          75% 100%,
          25% 100%,
          0% 50%
        );
        animation-iteration-count: infinite;
        animation-duration: 9s;
      }
      .shape1 {
        background-color: #fd7e14;
        z-index: 1;
        animation-name: shape1;
      }
      .shape2 {
        background-color: white;
        z-index: 2;
        animation-name: shape2;
        border: 1px solid var(--color-yellow);
      }
      .logo {
        position: absolute;
        z-index: 3;
        width: 30px;
        left: 15px;
        top: 12px;
        img {
          width: 100%;
          display: block;
          margin: auto;
        }
      }
    }
  }
}

@keyframes shape2 {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes shape1 {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
}
</style>
