import Container from "common/Container";
import React from "react";

const Components = () => {
 const html = `<p><br></p><p style="text-align: center"><span style="font-size: 24px"><strong>VỀ CHÚNG TÔI</strong></span></p><hr class="__se__solid"><p style="text-align: center"><span style="font-size: 24px"></span></p><h2><span style="font-size: 20px">THƯƠNG HIỆU MODE FASHION</span></h2><div><span style="font-size: 18px">Lorem ipsum dolor sit amet. Est voluptas quibusdam eum totam necessitatibus id iure iusto ad sunt aliquam. Ab modi quia et impedit enim cum nisi odit et galisum assumenda aut doloribus nihil eum labore veritatis? Et dolorum quia aut accusamus excepturi At repellat esse. Aut iusto temporibus 33 sint debitis ab officiis eveniet et error debitis aut quia voluptatem aut quia repellendus et laudantium cupiditate.</span></div><div><span style="font-size: 18px">Lorem ipsum dolor sit amet. Est voluptas quibusdam eum totam necessitatibus id iure iusto ad sunt aliquam. Ab modi quia et impedit enim cum nisi odit et galisum assumenda aut doloribus nihil eum labore veritatis? Et dolorum quia aut accusamus excepturi At repellat esse. Aut iusto temporibus 33 sint debitis ab officiis eveniet et error debitis aut quia voluptatem aut quia repellendus et laudantium cupiditate.</span></div><div class="se-component se-image-container __se__float- __se__float-none"><figure><img src="https://theme.hstatic.net/200000592359/1001011894/14/about01_introduce1_img.jpg?v=427" alt="CÂU CHUYỆN THƯƠNG HIỆU" data-proportion="true" data-align="none" data-file-name="about01_introduce1_img.jpg?v=427" data-file-size="0" data-origin=",auto" data-size="," data-rotate="" data-percentage="auto,auto" style="box-sizing: border-box; margin: 0px; padding: 0px; vertical-align: middle; display: block; transition: all 0.5s ease-in-out 0s;"></figure></div><p style="text-align: center"><br></p><p style="text-align: center"><span style="font-size: 24px"><strong>MODE FASHION</strong></span></p><h2><span style="font-size: 20px">CÂU CHUYỆN THƯƠNG HIỆU</span></h2><p><span style="font-size: 18px">Lorem ipsum dolor sit amet. Est nihil obcaecati et reiciendis obcaecati aut quaerat soluta ut tempora vero ab autem dolor. Et distinctio facere aut perferendis aperiam qui porro tempore aut nihil voluptas. Non doloremque rerum ea facere quia sed error nostrum et consequuntur libero non tenetur aperiam!</span></p><div class="se-component se-image-container __se__float- __se__float-none"><figure><img src="https://theme.hstatic.net/200000592359/1001011894/14/about01_introduce2_img.jpg?v=427" alt="GIÁ TRỊ CỐT LỖI" data-proportion="true" data-align="none" data-file-name="about01_introduce2_img.jpg?v=427" data-file-size="0" data-origin=",auto" data-size="," data-rotate="" data-percentage="auto,auto" style="box-sizing: border-box; margin: 0px; padding: 0px; vertical-align: middle; display: block; transition: all 0.5s ease-in-out 0s;"></figure></div>`;
 return (
  <Container>
   <div
    className='sun-editor-editable'
    dangerouslySetInnerHTML={{ __html: html }}
   />
  </Container>
 );
};

export default Components;
