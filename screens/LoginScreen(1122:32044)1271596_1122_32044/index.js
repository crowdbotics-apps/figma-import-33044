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
      <View style={styles.View_1122_32045}>
        <View style={styles.View_1122_32046}>
          <View style={styles.View_1122_32047} />
          <View style={styles.View_1122_32048}>
            <Text style={styles.Text_1122_32048}>LOGIN</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_1122_32049}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("1122_32068"))
        }
      >
        <Text style={styles.Text_1122_32049}>
          Belum memiliki akun? Register
        </Text>
      </TouchableOpacity>
      <View style={styles.View_1122_32050}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/303e/fbba/92ee2baffbb9cb1a938afc7df9a4f1b1"
          }}
          style={styles.ImageBackground_1122_32051}
        />
        <View style={styles.View_1122_32052} />
        <View style={styles.View_1122_32053}>
          <Text style={styles.Text_1122_32053}>Password</Text>
        </View>
        <View style={styles.View_1122_32054}>
          <Text style={styles.Text_1122_32054}>Type your password</Text>
        </View>
      </View>
      <View style={styles.View_1122_32055}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/303e/fbba/92ee2baffbb9cb1a938afc7df9a4f1b1"
          }}
          style={styles.ImageBackground_1122_32056}
        />
        <View style={styles.View_1122_32057} />
        <View style={styles.View_1122_32058}>
          <Text style={styles.Text_1122_32058}>Email</Text>
        </View>
        <View style={styles.View_1122_32059}>
          <Text style={styles.Text_1122_32059}>Type your phone Email</Text>
        </View>
      </View>
      <View style={styles.View_1122_32060}>
        <Text style={styles.Text_1122_32060}>Lupa password?</Text>
      </View>
      <View style={styles.View_1122_32061}>
        <View style={styles.View_1122_32062}>
          <Text style={styles.Text_1122_32062}>Mr. Alpha</Text>
        </View>
        <View style={styles.View_1122_32063}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a9b3/1021/ea3bbcb3c3c810a48187835a6ee70bbd"
            }}
            style={styles.ImageBackground_1122_32064}
          />
          <View style={styles.View_1122_32067} />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("100%") },
  View_1122_32045: {
    width: wp("73%"),
    minWidth: wp("73%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("81%")
  },
  View_1122_32046: {
    width: wp("73%"),
    minWidth: wp("73%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1122_32047: {
    width: wp("73%"),
    minWidth: wp("73%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(119, 132, 238, 1)"
  },
  View_1122_32048: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_1122_32048: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_1122_32049: {
    width: wp("46%"),
    minWidth: wp("46%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("94%"),
    justifyContent: "flex-start"
  },
  Text_1122_32049: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_32050: {
    width: wp("73%"),
    minWidth: wp("73%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("47%")
  },
  ImageBackground_1122_32051: {
    width: wp("73%"),
    minWidth: wp("73%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%")
  },
  View_1122_32052: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1122_32053: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_1122_32053: {
    color: "rgba(119, 132, 238, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_32054: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_1122_32054: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_32055: {
    width: wp("73%"),
    minWidth: wp("73%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("37%")
  },
  ImageBackground_1122_32056: {
    width: wp("73%"),
    minWidth: wp("73%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%")
  },
  View_1122_32057: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1122_32058: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_1122_32058: {
    color: "rgba(119, 132, 238, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_32059: {
    width: wp("34%"),
    minWidth: wp("34%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_1122_32059: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_32060: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("58%"),
    justifyContent: "flex-start"
  },
  Text_1122_32060: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_32061: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("25%")
  },
  View_1122_32062: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_1122_32062: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_32063: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1122_32064: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1122_32067: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("4%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
