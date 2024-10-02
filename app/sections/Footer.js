import React from "react";
import styles from "@/app/styles/Footer.module.css";

export default function Footer() {
  return (
    <footer class="px-10 mt-20 pb-[50px]">
      <div class="flex justify-between">
        <h1 class="text-[120px] font-black textGradient">Let's Talk</h1>
        <div class={`${styles.getaQuoteBtn}`}>
          <button>Get a Quote</button>
        </div>
      </div>
      <div class="flex mt-10 justify-between border-b pb-5">
        <div class="flex items-center gap-2">
          <div class={`${styles.socialMediaBtn}  p-1 w-fit rounded-full`}>
            <div class="rounded-full bg-black p-2 w-10 h-10 flex justify-center items-center">
              <img src="./svgs/instagram.svg" alt="instagram" />
            </div>
          </div>
          <div class={`${styles.socialMediaBtn} p-1 w-fit rounded-full`}>
            <div class="rounded-full bg-black p-2 w-10 h-10 flex justify-center items-center">
              <img src="./svgs/linkedin.svg" alt="linkedin" />
            </div>
          </div>
          <div class={`${styles.socialMediaBtn} p-1 w-fit rounded-full`}>
            <div class="rounded-full bg-black p-2 w-10 h-10 flex justify-center items-center">
              <img src="./svgs/facebook.svg" alt="facebook" />
            </div>
          </div>
          <span class="NunitoSans text-[25px] font-black">
            +1 (737) 313-4991
          </span>
        </div>
        <div class="IBMPlexSans flex gap-2 items-end text-[17px] w-[50%]">
          <span class="text-3xl">✌️</span>
          <p>
            <a href="mailto:contact@saasifylabs.com">contact@saasifylabs.com</a>{" "}
            Ready to advance your next digital or SaaS product? {"We’re"} just
            an email {"away—let's"} discuss your project ideas.
          </p>
        </div>
      </div>
    </footer>
  );
}
