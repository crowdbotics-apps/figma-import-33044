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
      <TouchableOpacity
        style={styles.TouchableOpacity_1122_32069}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("1122_32044"))
        }
      >
        <Text style={styles.Text_1122_32069}>Sudah memiliki akun? Login</Text>
      </TouchableOpacity>
      <View style={styles.View_1122_32070}>
        <View style={styles.View_1122_32071}>
          <View style={styles.View_1122_32072} />
          <View style={styles.View_1122_32073}>
            <Text style={styles.Text_1122_32073}>REGISTER</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1122_32074}>
        <View style={styles.View_1122_32075}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/303e/fbba/92ee2baffbb9cb1a938afc7df9a4f1b1"
            }}
            style={styles.ImageBackground_1122_32076}
          />
          <View style={styles.View_1122_32077} />
          <View style={styles.View_1122_32078}>
            <Text style={styles.Text_1122_32078}>Telephone</Text>
          </View>
          <View style={styles.View_1122_32079}>
            <Text style={styles.Text_1122_32079}>Type your Number</Text>
          </View>
        </View>
        <View style={styles.View_1122_32080}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/303e/fbba/92ee2baffbb9cb1a938afc7df9a4f1b1"
            }}
            style={styles.ImageBackground_1122_32081}
          />
          <View style={styles.View_1122_32082} />
          <View style={styles.View_1122_32083}>
            <Text style={styles.Text_1122_32083}>Name</Text>
          </View>
          <View style={styles.View_1122_32084}>
            <Text style={styles.Text_1122_32084}>Type your phone Name</Text>
          </View>
        </View>
        <View style={styles.View_1122_32085}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/303e/fbba/92ee2baffbb9cb1a938afc7df9a4f1b1"
            }}
            style={styles.ImageBackground_1122_32086}
          />
          <View style={styles.View_1122_32087}>
            <View style={styles.View_1122_32088} />
            <View style={styles.View_1122_32089}>
              <Text style={styles.Text_1122_32089}>Code</Text>
            </View>
          </View>
          <View style={styles.View_1122_32090}>
            <Text style={styles.Text_1122_32090}>Type your Code</Text>
          </View>
        </View>
        <View style={styles.View_1122_32091}>
          <View style={styles.View_1122_32092}>
            <Text style={styles.Text_1122_32092}>
              Saya sudah membaca dan menyetujui syarat ketentuan yang berlaku
            </Text>
          </View>
          <View style={styles.View_1122_32093} />
        </View>
        <View style={styles.View_1122_32094}>
          <View style={styles.View_1122_32095}>
            <Text style={styles.Text_1122_32095}>Mr. Alpha</Text>
          </View>
          <View style={styles.View_1122_32096}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a9b3/1021/ea3bbcb3c3c810a48187835a6ee70bbd"
              }}
              style={styles.ImageBackground_1122_32097}
            />
            <View style={styles.View_1122_32100} />
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("100%") },
  TouchableOpacity_1122_32069: {
    width: wp("42%"),
    minWidth: wp("42%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("94%"),
    justifyContent: "flex-start"
  },
  Text_1122_32069: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_32070: {
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
  View_1122_32071: {
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
  View_1122_32072: {
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
  View_1122_32073: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_1122_32073: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_32074: {
    width: wp("74%"),
    minWidth: wp("74%"),
    height: hp("56%"),
    minHeight: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("13%")
  },
  View_1122_32075: {
    width: wp("73%"),
    minWidth: wp("73%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("30%")
  },
  ImageBackground_1122_32076: {
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
  View_1122_32077: {
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
  View_1122_32078: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_1122_32078: {
    color: "rgba(119, 132, 238, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_32079: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_1122_32079: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_32080: {
    width: wp("73%"),
    minWidth: wp("73%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20%")
  },
  ImageBackground_1122_32081: {
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
  View_1122_32082: {
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
  View_1122_32083: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_1122_32083: {
    color: "rgba(119, 132, 238, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_32084: {
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
  Text_1122_32084: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_32085: {
    width: wp("73%"),
    minWidth: wp("73%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%")
  },
  ImageBackground_1122_32086: {
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
  View_1122_32087: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  View_1122_32088: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1122_32089: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_1122_32089: {
    color: "rgba(119, 132, 238, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_32090: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_1122_32090: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_32091: {
    width: wp("54%"),
    minWidth: wp("54%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("52%")
  },
  View_1122_32092: {
    width: wp("47%"),
    minWidth: wp("47%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1122_32092: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_32093: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    borderColor: "rgba(74, 74, 74, 1)",
    borderWidth: 2
  },
  View_1122_32094: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("0%")
  },
  View_1122_32095: {
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
  Text_1122_32095: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_32096: {
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
  ImageBackground_1122_32097: {
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
  View_1122_32100: {
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
