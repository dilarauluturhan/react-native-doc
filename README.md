<div align="center">
  <h1 align="center">React Native Notlarım</h1>
</div>

#### ✨React ve React Native Temelleri✨
- **JSX** React'ın dil formatıdır.
- **Component** React dünyasınındaki her bir parçadır. Değer alabilen ve  aldığı değerleri render edebilen özel yapılardır.
- **Stillendirmede** React Native **Yoga Layout** yapısını kullanır. Aynı CSS'de olduğu gibi benzer property'ler kullanılarak isimlendirme yapılır. Örneğin:

````
  StyleSheet.create({
          backgroundColor: 'red',
          padding: 10,
          marginTop: 5,
          borderRadius: 20
          borderWidth: 1
    })
````

yapısı örnek bir stillendirmedir.
- https://www.yogalayout.dev/playground/
- https://flexbox.buildwithreact.com

- **Custom Component**: React olabildiğince sade bir kod yazmayı hedefler. Karmaşıklığa doğru gidebilecek her bir component yapısı sadeleştirilmelidir. Tekrarlı kullanıma ihtiyaç duyulabilecek bir yapı söz konusuysa burada devreye onu componentlere ayırmak giriyor. Kendi yaşam döngüleri olan componentler üzerinden gitmek her zaman karmaşık yapılara kıyasla daha mantıklı bir çözümdür.

#### ✨Expo ile React Native Projesi Oluşturma✨
Expo ile React Native projesi oluşturmak için aşağıdaki adımları izlemeliyiz:
- Terminale gidip ``npx create-expo-app --template`` komutuyla kurulumu başlatıyoruz.
- Kurulumu yaparken karşımıza 4 adet template çıkacaktır. Bunlar:
``Blank`` **(JavaScript ile minimal bir yapıda app yazmak için)**
``Blank (TypeScript)`` **(TypeScript ile minimal bir yapıda app yazmak için)**
``Navigation (TypeScript)`` **(Navigation, Expo Router olarak geçiyor yani React Navigation üzerine yazılmış bir paket. File-based routing için kullanılıyor, dosya adınızın ismine göre route işlemi yapıyor.)**
``Blank (Bare)``

**Blank(TypeScript)**'i seçerek kuruluma devam ediyoruz.

- Daha sonra **What is your app named?** çıkıyor. Projenizin adını yazıyorsunuz. Ve uygulama kurulumu başlıyor.
- Kurulum tamamlandıktan sonra projeyi Visual Studio Code'da açıyoruz. Bu aşamaya geldiğinizde telefonunuza Expo'nun uygulamasını indirip giriş yapmış olmanız gerekir.
- Terminale gidip ``npx expo start`` diyerek projeyi ayağa kaldırıyoruz ve terminalde karşımıza QR code çıkıyor. Bu kodu Expo uygulamasında okuttuğumuzda kod çıktılarımızı görebiliyoruz.
- Expo uygulamasından kaynaklı bir hatadan dolayı ``npx expo start`` bazen çalışmayabilir bu durumda ise ``npx expo start --tunnel`` komutunu çalıştırarak tekrar deneyebilirsiniz.
- Expo uygulamasında ayağa kaldırdığım proje örneği:

![](https://github.com/dilarauluturhan/reactive/assets/120499369/8507904f-ba3f-4841-9a08-c9d11d8e046e)

#### ✨JSX ve Component✨
- ``<View>`` etiketi projenin container işlevine sahiptir. Web'deki karşılığı ``<div>`` etiketidir.
- ``<Text>`` etiketi metinler içindir. Web'deki karşılığı ``<p>`` etiketidir.
- ``<Image>`` etiketi resimler içindir. Web'deki karşılığı ``<img>`` etiketidir.
- ``<ScrollView>`` etiketi ekranımızın kaydırılabilir olmasını sağlar.
- ``<FlatList>`` etiketi ScrollView ile benzer özelliğe sahip hazır bir componenttir. Carousel yaparken kullanırız.
- ``<TextInput>`` etiketi metin alanları içindir. Web'deki karşılığı ``<input type="text">`` etiketidir.
- **Dimensions**: Responsive bir tasarım istediğimizde kullanırız. Örneğin **height** vereceksem ekran büyüdükçe height büyüsün ekran küçüldükçe height küçülsün diyebilmem için Dimensions kullanırız. Örnek kod bloğu:
````
import { StyleSheet, Dimensions } from "react-native";

const {height} = Dimensions.get('window')

const styles = StyleSheet.create({
    headerMain: {
        height: 30,
        backgroundColor: 'red',
    }

})

export default styles;
````
- ``<Image>`` etiketine style vermezsen çalışmaz.

#### Bu konulardan öğrendiklerimle yaptığım Getir Adres componenti:
![](https://github.com/dilarauluturhan/reactive/assets/120499369/e30d8c6a-0556-4bba-9027-add11d198ab0)

- Banner wrap yapabilmek için **useRef()** kullanırız **çünkü kendi item'larımızın değiştiğini anlamamızı sağlıyor.**

#### Bu konudan öğrendiklerimle yaptığım Getir Banner componenti:
![](https://github.com/dilarauluturhan/react-native-doc/assets/120499369/d7e8dbe5-7656-48a7-9820-4f269feaa9da)

- Component yapısı hakkında video: https://youtu.be/EYJqMx-mXLU?si=ccJJs8ioWqWGkAzF

---

#### Faydalandığım Kaynaklar:
- https://reactnative.dev
- https://expo.dev
- https://academy.patika.dev/tr/paths/react-native-ile-mobile-app-patikasi
- https://www.youtube.com/playlist?list=PLpL5Mp-2VZdI5yIoGKBsY_p4V2RySUH1W
- https://www.youtube.com/@AtalayJS
