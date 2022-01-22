import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_1204_33054} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f98e/4d77/9bab9a303da615ff26018316c7712711"
        }}
        style={styles.ImageBackground_1204_33055}
      />
      <View style={styles.View_1204_33058}>
        <Text style={styles.Text_1204_33058}>Panel Timses</Text>
      </View>
      <View style={styles.View_1204_33086}>
        <View style={styles.View_1204_33087} />
        <View style={styles.View_1204_33088}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4cd1/ff5f/b7489a12526f11bfa190c20d2d06baa2"
            }}
            style={styles.ImageBackground_1204_33089}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9861/c8d0/6d79933c975e3e9dfc5dafe6b996a0fd"
            }}
            style={styles.ImageBackground_1211_33024}
          />
        </View>
        <View style={styles.View_1204_33098}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4cd1/ff5f/b7489a12526f11bfa190c20d2d06baa2"
            }}
            style={styles.ImageBackground_1204_33099}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f69/0d69/748f381d2d057a0889b33add1f111ada"
            }}
            style={styles.ImageBackground_1204_33100}
          />
        </View>
        <View style={styles.View_1204_33114}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4cd1/ff5f/b7489a12526f11bfa190c20d2d06baa2"
            }}
            style={styles.ImageBackground_1204_33115}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
            }}
            style={styles.ImageBackground_1204_33116}
          />
          <View style={styles.View_1204_33119}>
            <View style={styles.View_1204_33120}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1928/c666/22daf8e324a70cb98be1ef368562f11c"
                }}
                style={styles.ImageBackground_1204_33124}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_1204_33127}>
          <View style={styles.View_1204_33128} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/39a4/6b4d/d71be2785ae8b3e9f8793e79c1f16a1a"
            }}
            style={styles.ImageBackground_1204_33129}
          />
        </View>
      </View>
      <View style={styles.View_1204_33147} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c4ec/4b39/72ecc87cd10b2d1916b8ee6d1645c56d"
        }}
        style={styles.ImageBackground_1204_33158}
      />
      <View style={styles.View_1204_33149} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff35/257a/9e49eaa08f5284be1987cd3bd8adbd0b"
        }}
        style={styles.ImageBackground_1204_33161}
      />
      <View style={styles.View_1204_33150} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fcc6/a276/b729c9c77d4d37602ef95b6f537f5fb2"
        }}
        style={styles.ImageBackground_1204_33213}
      />
      <View style={styles.View_1204_33151} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b4c/e627/6ef8c304fed01eb2088d29efbb376b75"
        }}
        style={styles.ImageBackground_1204_33200}
      />
      <View style={styles.View_1204_33152} />
      <View style={styles.View_1204_33203}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
          }}
          style={styles.ImageBackground_I1204_33203_1183_32990}
        />
        <View style={styles.View_I1204_33203_1183_32992}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b27b/e1cb/30c759eedac50fc785f92477c3c24a91"
            }}
            style={styles.ImageBackground_I1204_33203_1183_32993}
          />
        </View>
      </View>
      <View style={styles.View_1204_33153}>
        <Text style={styles.Text_1204_33153}>Ubah Visi Misi</Text>
      </View>
      <View style={styles.View_1204_33154}>
        <Text style={styles.Text_1204_33154}>Ubah Profil CALEG</Text>
      </View>
      <View style={styles.View_1204_33155}>
        <Text style={styles.Text_1204_33155}>Tulis Berita</Text>
      </View>
      <View style={styles.View_1204_33156}>
        <Text style={styles.Text_1204_33156}>Upload Gambar</Text>
      </View>
      <View style={styles.View_1204_33157}>
        <Text style={styles.Text_1204_33157}>Upload Video</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(244, 244, 244, 1)" },
  View_2: { height: hp("100%") },
  View_1204_33054: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_1204_33055: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_1204_33058: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_1204_33058: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1204_33086: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("93%")
  },
  View_1204_33087: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1204_33088: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("0%")
  },
  ImageBackground_1204_33089: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1211_33024: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_1204_33098: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("0%")
  },
  ImageBackground_1204_33099: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1204_33100: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_1204_33114: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  ImageBackground_1204_33115: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1204_33116: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_1204_33119: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_1204_33120: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1204_33124: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1204_33127: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("0%")
  },
  View_1204_33128: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 254, 254, 1)"
  },
  ImageBackground_1204_33129: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_1204_33147: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("15%"),
    backgroundColor: "rgba(73, 126, 254, 1)"
  },
  ImageBackground_1204_33158: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  View_1204_33149: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("26%"),
    backgroundColor: "rgba(73, 126, 254, 1)"
  },
  ImageBackground_1204_33161: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  View_1204_33150: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("59%"),
    backgroundColor: "rgba(73, 126, 254, 1)"
  },
  ImageBackground_1204_33213: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("60%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  View_1204_33151: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("48%"),
    backgroundColor: "rgba(73, 126, 254, 1)"
  },
  ImageBackground_1204_33200: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  View_1204_33152: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("37%"),
    backgroundColor: "rgba(73, 126, 254, 1)"
  },
  View_1204_33203: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("38%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I1204_33203_1183_32990: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1204_33203_1183_32992: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I1204_33203_1183_32993: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1204_33153: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("17%"),
    justifyContent: "center"
  },
  Text_1204_33153: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1204_33154: {
    width: wp("35%"),
    minWidth: wp("35%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("28%"),
    justifyContent: "center"
  },
  Text_1204_33154: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1204_33155: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("39%"),
    justifyContent: "center"
  },
  Text_1204_33155: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1204_33156: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("50%"),
    justifyContent: "center"
  },
  Text_1204_33156: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1204_33157: {
    width: wp("26%"),
    minWidth: wp("26%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("61%"),
    justifyContent: "center"
  },
  Text_1204_33157: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
