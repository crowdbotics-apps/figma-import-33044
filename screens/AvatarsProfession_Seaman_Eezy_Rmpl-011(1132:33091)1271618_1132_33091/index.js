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
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b419/6264/717259985dd741d9409a6b477b321c5a"
        }}
        style={styles.ImageBackground_1132_33092}
      />
      <View style={styles.View_1132_33094}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1c8/a36a/bbe2b35d7f28e34103d15992220de836"
          }}
          style={styles.ImageBackground_1132_33095}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b028/547c/104000dd4bb1c06482fa517fce9763bc"
          }}
          style={styles.ImageBackground_1132_33198}
        />
        <View style={styles.View_1132_33305}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
            }}
            style={styles.ImageBackground_1132_33306}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
            }}
            style={styles.ImageBackground_1132_33307}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
            }}
            style={styles.ImageBackground_1132_33308}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
            }}
            style={styles.ImageBackground_1132_33309}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
            }}
            style={styles.ImageBackground_1132_33310}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
            }}
            style={styles.ImageBackground_1132_33311}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
            }}
            style={styles.ImageBackground_1132_33312}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
            }}
            style={styles.ImageBackground_1132_33313}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
            }}
            style={styles.ImageBackground_1132_33314}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
            }}
            style={styles.ImageBackground_1132_33315}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
            }}
            style={styles.ImageBackground_1132_33316}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
            }}
            style={styles.ImageBackground_1132_33317}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
            }}
            style={styles.ImageBackground_1132_33318}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f98a/6230/9ec18f6222a8cd4711a884b410569f4f"
            }}
            style={styles.ImageBackground_1132_33319}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f8b7/9be7/295d2f79f2e4dc8f9f68ac10dfeee174"
            }}
            style={styles.ImageBackground_1132_33320}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1edc/538d/8c83ac03fb442dff1767357d43062382"
            }}
            style={styles.ImageBackground_1132_33321}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f59/b01f/61a6710c4bc2db0a16e8786d4d9e579a"
            }}
            style={styles.ImageBackground_1132_33322}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/92d2/5e3f/da5b13d1322450cc07cd586a2bda37b6"
            }}
            style={styles.ImageBackground_1132_33323}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f925/5922/6e62f412c4e7195378491ae10e348d46"
            }}
            style={styles.ImageBackground_1132_33324}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aa1b/8d06/cbf8ff2f5581324173145dd0201c5ec2"
            }}
            style={styles.ImageBackground_1132_33325}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/998a/4277/e0fa299075919daab8462a6e1121d1af"
            }}
            style={styles.ImageBackground_1132_33326}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/14b6/5f01/c2ae5798946872a12b0a7e18773f4488"
            }}
            style={styles.ImageBackground_1132_33327}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/12bb/0280/ba402c158d79ddabb9e063d90b77c1bd"
            }}
            style={styles.ImageBackground_1132_33328}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c01/aad1/e2e7ca9acd3fcf63ba0bb7c37a3244d8"
            }}
            style={styles.ImageBackground_1132_33329}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e979/7e63/48ec744b18d01a0e6a14480b02b4c936"
            }}
            style={styles.ImageBackground_1132_33330}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f3a4/3688/9a2fe9b7e547ca82b2a2a9b276a0c09c"
            }}
            style={styles.ImageBackground_1132_33331}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b31/03cb/59e61ede394258410787deb65f869920"
            }}
            style={styles.ImageBackground_1132_33332}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a4b/147a/49cbb84b38ac5729fc3095c4ac783a57"
            }}
            style={styles.ImageBackground_1132_33333}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ca3/829d/169358c2a0e74871d5f7dc901d586711"
            }}
            style={styles.ImageBackground_1132_33334}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f101/e045/5c3555d636678bd49a5804221cb235e0"
            }}
            style={styles.ImageBackground_1132_33335}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cef5/850d/cc4dcea70ab40b6b27c97baee51ddfd3"
            }}
            style={styles.ImageBackground_1132_33336}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f101/e045/5c3555d636678bd49a5804221cb235e0"
            }}
            style={styles.ImageBackground_1132_33370}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a08a/f420/c57d53b525c6fbb562b8bdbbc539fdac"
          }}
          style={styles.ImageBackground_1132_33371}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ace5/49db/9e881194184d311f108b3675b2ca431d"
          }}
          style={styles.ImageBackground_1132_33464}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f748/b3e5/731ade6eedf615babaf11ad98de2a360"
          }}
          style={styles.ImageBackground_1132_33543}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f604/841a/aa6b8d1ee3cb41f1b722b54c7df6c016"
          }}
          style={styles.ImageBackground_1132_33672}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3333/8b3c/630da53136674c1539f25da9c9e57bdc"
          }}
          style={styles.ImageBackground_1132_33743}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7618/8b0c/4b20334853ca629591bdc8e824e1bf0b"
          }}
          style={styles.ImageBackground_1132_33780}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("100%") },
  ImageBackground_1132_33092: {
    width: wp("100%"),
    height: hp("100%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1132_33094: {
    width: wp("165%"),
    height: hp("6011%"),
    top: hp("89%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1132_33095: {
    width: wp("34%"),
    height: hp("1420%"),
    top: hp("3904%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%")
  },
  ImageBackground_1132_33198: {
    width: wp("34%"),
    height: hp("1421%"),
    top: hp("3903%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("131%")
  },
  View_1132_33305: {
    width: wp("56%"),
    height: hp("4059%"),
    top: hp("1952%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1132_33306: {
    width: wp("3%"),
    height: hp("7%"),
    top: hp("997%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%")
  },
  ImageBackground_1132_33307: {
    width: wp("2%"),
    height: hp("41%"),
    top: hp("773%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%")
  },
  ImageBackground_1132_33308: {
    width: wp("2%"),
    height: hp("46%"),
    top: hp("774%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%")
  },
  ImageBackground_1132_33309: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("907%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%")
  },
  ImageBackground_1132_33310: {
    width: wp("1%"),
    height: hp("50%"),
    top: hp("913%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%")
  },
  ImageBackground_1132_33311: {
    width: wp("2%"),
    height: hp("25%"),
    top: hp("609%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%")
  },
  ImageBackground_1132_33312: {
    width: wp("1%"),
    height: hp("34%"),
    top: hp("963%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%")
  },
  ImageBackground_1132_33313: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("995%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%")
  },
  ImageBackground_1132_33314: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("907%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%")
  },
  ImageBackground_1132_33315: {
    width: wp("0%"),
    height: hp("43%"),
    top: hp("910%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%")
  },
  ImageBackground_1132_33316: {
    width: wp("3%"),
    height: hp("47%"),
    top: hp("675%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%")
  },
  ImageBackground_1132_33317: {
    width: wp("3%"),
    height: hp("37%"),
    top: hp("723%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%")
  },
  ImageBackground_1132_33318: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("686%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%")
  },
  ImageBackground_1132_33319: {
    width: wp("23%"),
    height: hp("499%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  ImageBackground_1132_33320: {
    width: wp("7%"),
    height: hp("469%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%")
  },
  ImageBackground_1132_33321: {
    width: wp("12%"),
    height: hp("253%"),
    top: hp("399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%")
  },
  ImageBackground_1132_33322: {
    width: wp("2%"),
    height: hp("195%"),
    top: hp("845%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  ImageBackground_1132_33323: {
    width: wp("2%"),
    height: hp("195%"),
    top: hp("847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%")
  },
  ImageBackground_1132_33324: {
    width: wp("1%"),
    height: hp("89%"),
    top: hp("908%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%")
  },
  ImageBackground_1132_33325: {
    width: wp("1%"),
    height: hp("89%"),
    top: hp("908%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%")
  },
  ImageBackground_1132_33326: {
    width: wp("15%"),
    height: hp("443%"),
    top: hp("598%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%")
  },
  ImageBackground_1132_33327: {
    width: wp("13%"),
    height: hp("257%"),
    top: hp("772%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%")
  },
  ImageBackground_1132_33328: {
    width: wp("7%"),
    height: hp("84%"),
    top: hp("676%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%")
  },
  ImageBackground_1132_33329: {
    width: wp("6%"),
    height: hp("339%"),
    top: hp("1091%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%")
  },
  ImageBackground_1132_33330: {
    width: wp("6%"),
    height: hp("338%"),
    top: hp("1091%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%")
  },
  ImageBackground_1132_33331: {
    width: wp("17%"),
    height: hp("463%"),
    top: hp("997%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%")
  },
  ImageBackground_1132_33332: {
    width: wp("22%"),
    height: hp("201%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%")
  },
  ImageBackground_1132_33333: {
    width: wp("4%"),
    height: hp("417%"),
    top: hp("81%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  ImageBackground_1132_33334: {
    width: wp("4%"),
    height: hp("419%"),
    top: hp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%")
  },
  ImageBackground_1132_33335: {
    width: wp("1%"),
    height: hp("44%"),
    top: hp("116%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%")
  },
  ImageBackground_1132_33336: {
    width: wp("56%"),
    height: hp("4059%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1132_33370: {
    width: wp("1%"),
    height: hp("44%"),
    top: hp("116%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%")
  },
  ImageBackground_1132_33371: {
    width: wp("56%"),
    height: hp("2108%"),
    top: hp("3903%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1132_33464: {
    width: wp("56%"),
    height: hp("6011%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1132_33543: {
    width: wp("165%"),
    height: hp("4059%"),
    top: hp("1952%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1132_33672: {
    width: wp("34%"),
    height: hp("1364%"),
    top: hp("1953%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%")
  },
  ImageBackground_1132_33743: {
    width: wp("111%"),
    height: hp("6005%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1132_33780: {
    width: wp("34%"),
    height: hp("1365%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("131%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
