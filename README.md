# 2022-okr-H2-frontend

## Description
Uygulamada React üzerinden web socket haberleşmesi sağlanmıştır.

Backend entegresi ile login/signup işlemleri ve kullanıcı listeleme/filtreleme işlemleri yapılabilmektedir.

Database olarak mongodb, orm olarak mongoose kullanılmıştır. Veriler MongoAtlas cloudu üzerinde host edilmiştir.

Paketler;
- UI geliştirmeleri için tailwindcss
- Form ve validation için formik ve yup kütüphaneleri
- Icon için react-icons
- Route işlemleri için react-router-dom
- State management için ise basit ve performanslı olmasından dolayı zustand kullanılmıştır.
- Site başlıkları vs. için react-helmet
- Backend ve websocket servisi ile haberleşmeyi ön yüzden sağlamak için socket.io-client kullanılmıştır.

## Install
npm install

## Run
npm run dev

## env
.env.development 
.env.production

## Packages
- sass
- react-icons
- classnames
- formik
- react-helmet
- react-router-dom
- uuid
- yup
- zustand
- tailwindcss
- socket.io-client
