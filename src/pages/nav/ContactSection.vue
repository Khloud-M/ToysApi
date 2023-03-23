<template>
  <section>
    <landing-page />
    <div class="container">
      <div class="contact col-lg-6">
        <h2>Contact us by sending a message with your inquiry</h2>
        <form @submit.prevent="submit">
          <div class="name">
            <label for="name"> name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter name here"
              v-model="name"
              required
            />
          </div>
          <!-- end name -->
          <div class="email">
            <label for="name"> email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter email here"
              v-model="email"
              required
            />
          </div>
          <!-- end email -->
          <div class="Message">
            <label for="Message"> Message </label>
            <textarea
              placeholder="Enter Message here"
              v-model="message"
              rows="7"
            >
            </textarea>
          </div>
          <!-- end name -->
          <base-button class="button_form">
            <v-icon icon="mdi-send-outline"></v-icon> send message</base-button
          >
        </form>
      </div>
      <div class="faq col-lg-5">
        <h2>Faq</h2>
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via
                CSS transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that
                just about any HTML can go within the
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import BaseButton from "@/components/ui/BaseButton.vue";
export default {
  components: { BaseButton },
  data() {
    return {
      name: null,
      email: null,
      message: null,
    };
  },
  methods: {
    submit() {
      this.name = "";
      this.email = "";
      this.message = "";
    },
  },
};
</script>

<style  lang="scss"   scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: var(--margin) auto;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    h2 {
      font-size: 18px;
    }
  }
}
.contact {
  border: 1px solid var(--border-color);
  padding: 20px 40px;
  border-radius: 15px;
  form {
    margin: 30px 0;
    label {
      display: block;
      margin: 20px 0;
      text-transform: capitalize;
      font-size: 20px;
    }
    input,
    textarea {
      outline: none;
      border: 1px solid var(--border-color);
      padding: 15px 10px;
      border-radius: 10px;
      width: 100%;
      transition: all var(--transtion) ease-in-out;
    }
    input:focus,
    textarea:focus {
      border-color: var(--color-yellow);
    }
  }
  .button_form {
    margin-top: 20px;
    .v-icon {
      padding: 0 10px;
      transform: rotateZ(-50deg);
      font-size: 20px;
      margin-top: -10px;
    }
  }
}
.faq {
  margin-top: 20px;
  .accordion {
    --bs-accordion-border-color: none !important;
    .accordion-button:not(.collapsed) {
      color: var(--main-color);
      background-color: transparent !important;
      box-shadow: 0 0 0 0 !important;
    }
    .accordion-button {
      background-color: #fff6cd;
      border-radius: 10px;
      border-left: 3px solid var(--color-yellow);
    }
    .accordion-item {
      margin: 30px 0;
      background-color: #fff6cd;
      border-left: 3px solid var(--color-yellow);
      border-radius: 10px;
    }
  }
  .accordion-button:focus {
    z-index: 3;
    border-color: transparent !important;
    outline: 0;
    box-shadow: 0 0 0 0;
  }
}
</style>
