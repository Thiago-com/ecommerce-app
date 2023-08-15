import React from 'react'
import Meta from '../components/Meta'
import BreadCumb from '../components/BreadCrumb'
import Container from '../components/Container'

const PrivacyPolicy = () => {
  return (
    <>
      <Meta title={"Privacy Policy"} />
        <BreadCumb title="Privacy Policy" />

        <Container class1="policy-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <div className="policy">
                <h2 className="policy-title">The Standard Lorem Ipsum Passage</h2>
                <p className="policy-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan turpis posuere cursus ultricies. Ut nunc justo, faucibus eget elit quis, vehicula rhoncus nulla. Phasellus convallis sem nec facilisis commodo. Fusce ut molestie turpis. Suspendisse aliquet sed massa in vulputate. Quisque gravida suscipit tincidunt.</p>
              </div>
              <div className="policy">
                <h5>At Vero Eos Et Accusamus Et Iusto Odio Dignissimos</h5>
                <p className="policy-description">Mauris elementum scelerisque elit non egestas. Cras lacus nibh, pretium quis bibendum nec, dapibus a metus. Morbi eros lectus, aliquam eu aliquam id, fringilla nec eros. Praesent suscipit commodo diam, non viverra turpis dapibus malesuada. Duis cursus metus eu sem eleifend, id rhoncus odio porttitor.</p>
              </div>
              <div className="policy">
                <h5>Certain Circumstances And Owing To The Claims Of Duty Or The Obligations</h5>
                <p className="policy-description">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes.</p>
              </div>
              <div className="policy">
                <h5>Integer Ultrices Laoreet Nunc In Gravida</h5>
                <p className="policy-description">Sed lobortis pulvinar viverra. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris suscipit dolor scelerisque, bibendum tellus ac, pharetra sapien. Praesent lacinia scelerisque odio et consequat. In a facilisis lacus. Maecenas vel lobortis tellus.</p>
              </div>
            </div>
          </div>
      </Container>
    </>
  )
}

export default PrivacyPolicy