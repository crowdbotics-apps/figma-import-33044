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
      <View style={styles.View_1258_34104} />
      <View style={styles.View_1258_34105}>
        <Text style={styles.Text_1258_34105}>Tambah Anggota</Text>
      </View>
      <View style={styles.View_1259_34416}>
        <Text style={styles.Text_1259_34416}>Berikutnya</Text>
      </View>
      <View style={styles.View_1259_34341}>
        <View style={styles.View_1259_34336} />
        <View style={styles.View_1259_34337}>
          <Text style={styles.Text_1259_34337}>Search</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9977/2122/fc618a703aa833219dcdc8d09b7ebab9"
          }}
          style={styles.ImageBackground_1259_34338}
        />
      </View>
      <View style={styles.View_1259_34214}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/348a/e6d4/665a51c13c2ee27b2ac1338fe8c1228f"
          }}
          style={styles.ImageBackground_1259_34215}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff69/d7f2/3a9897b7b7e17b867f7079604c81c885"
          }}
          style={styles.ImageBackground_1259_34342}
        />
        <View style={styles.View_1259_34217}>
          <Text style={styles.Text_1259_34217}>Anggota</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/71d1/611b/bb10ce6baf4c704103d2cdbe02af3cc0"
          }}
          style={styles.ImageBackground_1259_34366}
        />
      </View>
      <View style={styles.View_1259_34218}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/348a/e6d4/665a51c13c2ee27b2ac1338fe8c1228f"
          }}
          style={styles.ImageBackground_1259_34219}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff69/d7f2/3a9897b7b7e17b867f7079604c81c885"
          }}
          style={styles.ImageBackground_1259_34348}
        />
        <View style={styles.View_1259_34221}>
          <Text style={styles.Text_1259_34221}>Anggota</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/71d1/611b/bb10ce6baf4c704103d2cdbe02af3cc0"
          }}
          style={styles.ImageBackground_1259_34372}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b5a1/725c/6e5600310d31301d9940d8b7491e928b"
          }}
          style={styles.ImageBackground_1259_34399}
        />
      </View>
      <View style={styles.View_1259_34222}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/348a/e6d4/665a51c13c2ee27b2ac1338fe8c1228f"
          }}
          style={styles.ImageBackground_1259_34223}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff69/d7f2/3a9897b7b7e17b867f7079604c81c885"
          }}
          style={styles.ImageBackground_1259_34351}
        />
        <View style={styles.View_1259_34225}>
          <Text style={styles.Text_1259_34225}>Anggota</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/71d1/611b/bb10ce6baf4c704103d2cdbe02af3cc0"
          }}
          style={styles.ImageBackground_1259_34375}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/71d1/611b/bb10ce6baf4c704103d2cdbe02af3cc0"
          }}
          style={styles.ImageBackground_1259_34378}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b5a1/725c/6e5600310d31301d9940d8b7491e928b"
          }}
          style={styles.ImageBackground_1259_34405}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b5a1/725c/6e5600310d31301d9940d8b7491e928b"
          }}
          style={styles.ImageBackground_1259_34402}
        />
      </View>
      <View style={styles.View_1259_34226}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/348a/e6d4/665a51c13c2ee27b2ac1338fe8c1228f"
          }}
          style={styles.ImageBackground_1259_34227}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff69/d7f2/3a9897b7b7e17b867f7079604c81c885"
          }}
          style={styles.ImageBackground_1259_34354}
        />
        <View style={styles.View_1259_34229}>
          <Text style={styles.Text_1259_34229}>Anggota</Text>
        </View>
      </View>
      <View style={styles.View_1259_34230}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/348a/e6d4/665a51c13c2ee27b2ac1338fe8c1228f"
          }}
          style={styles.ImageBackground_1259_34231}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff69/d7f2/3a9897b7b7e17b867f7079604c81c885"
          }}
          style={styles.ImageBackground_1259_34357}
        />
        <View style={styles.View_1259_34233}>
          <Text style={styles.Text_1259_34233}>Anggota</Text>
        </View>
      </View>
      <View style={styles.View_1259_34234}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/348a/e6d4/665a51c13c2ee27b2ac1338fe8c1228f"
          }}
          style={styles.ImageBackground_1259_34235}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff69/d7f2/3a9897b7b7e17b867f7079604c81c885"
          }}
          style={styles.ImageBackground_1259_34360}
        />
        <View style={styles.View_1259_34237}>
          <Text style={styles.Text_1259_34237}>Anggota</Text>
        </View>
      </View>
      <View style={styles.View_1259_34238}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/348a/e6d4/665a51c13c2ee27b2ac1338fe8c1228f"
          }}
          style={styles.ImageBackground_1259_34239}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff69/d7f2/3a9897b7b7e17b867f7079604c81c885"
          }}
          style={styles.ImageBackground_1259_34363}
        />
        <View style={styles.View_1259_34241}>
          <Text style={styles.Text_1259_34241}>Anggota</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f98e/4d77/9bab9a303da615ff26018316c7712711"
        }}
        style={styles.ImageBackground_1259_34625}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("100%") },
  View_1258_34104: {
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
  View_1258_34105: {
    width: wp("40%"),
    minWidth: wp("40%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_1258_34105: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1259_34416: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_1259_34416: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1259_34341: {
    width: wp("96%"),
    minWidth: wp("96%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("12%")
  },
  View_1259_34336: {
    width: wp("96%"),
    minWidth: wp("96%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)",
    borderColor: "rgba(222, 222, 222, 1)",
    borderWidth: 0.5
  },
  View_1259_34337: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_1259_34337: {
    color: "rgba(150, 155, 168, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  ImageBackground_1259_34338: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_1259_34214: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("21%")
  },
  ImageBackground_1259_34215: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1259_34342: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_1259_34217: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_1259_34217: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1259_34366: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  View_1259_34218: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("57%"),
    minHeight: hp("57%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("31%")
  },
  ImageBackground_1259_34219: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1259_34348: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_1259_34221: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_1259_34221: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1259_34372: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  ImageBackground_1259_34399: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("54%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  View_1259_34222: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("36%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("42%")
  },
  ImageBackground_1259_34223: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1259_34351: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_1259_34225: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_1259_34225: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1259_34375: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  ImageBackground_1259_34378: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  ImageBackground_1259_34405: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  ImageBackground_1259_34402: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  View_1259_34226: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("52%")
  },
  ImageBackground_1259_34227: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1259_34354: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_1259_34229: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_1259_34229: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1259_34230: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("63%")
  },
  ImageBackground_1259_34231: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1259_34357: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_1259_34233: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_1259_34233: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1259_34234: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("73%")
  },
  ImageBackground_1259_34235: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1259_34360: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_1259_34237: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_1259_34237: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1259_34238: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("84%")
  },
  ImageBackground_1259_34239: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1259_34363: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_1259_34241: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_1259_34241: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1259_34625: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
