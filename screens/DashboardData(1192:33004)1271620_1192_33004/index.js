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
      <View style={styles.View_1192_33005}>
        <View style={styles.View_1192_33109}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b105/adca/59c0a67b8a5c63013ed8a8a5cfd8f048"
            }}
            style={styles.ImageBackground_1192_33107}
          />
          <View style={styles.View_1192_33108}>
            <Text style={styles.Text_1192_33108}>Pilih Ikon</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e045/6f1e/0fd0b3506322718ed4f9d71370a0a462"
            }}
            style={styles.ImageBackground_1234_34895}
          />
        </View>
        <View style={styles.View_1234_34869}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b105/adca/59c0a67b8a5c63013ed8a8a5cfd8f048"
            }}
            style={styles.ImageBackground_1234_34870}
          />
          <View style={styles.View_1234_34871}>
            <Text style={styles.Text_1234_34871}>Buat Distribusi</Text>
          </View>
        </View>
        <View style={styles.View_1192_33113}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b105/adca/59c0a67b8a5c63013ed8a8a5cfd8f048"
            }}
            style={styles.ImageBackground_1192_33114}
          />
          <View style={styles.View_1192_33115}>
            <Text style={styles.Text_1192_33115}>Pilih Orang</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e045/6f1e/0fd0b3506322718ed4f9d71370a0a462"
            }}
            style={styles.ImageBackground_1192_33116}
          />
        </View>
      </View>
      <View style={styles.View_1233_33771} />
      <View style={styles.View_1233_33772}>
        <View style={styles.View_I1233_33772_102_2768}>
          <View style={styles.View_I1233_33772_102_2768_1_97}>
            <Text style={styles.Text_I1233_33772_102_2768_1_97}>
              Pilih Wilayah
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1234_34584}>
        <View style={styles.View_I1234_34584_102_2766}>
          <View style={styles.View_I1234_34584_102_2766_1_9}>
            <Text style={styles.Text_I1234_34584_102_2766_1_9}></Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_I1234_34584_102_2767}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("1019_31571"))
          }
        />
        <View style={styles.View_I1234_34584_102_2768}>
          <View style={styles.View_I1234_34584_102_2768_1_97}>
            <Text style={styles.Text_I1234_34584_102_2768_1_97}>
              DAPIL DPRD
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1234_34585}>
        <View style={styles.View_I1234_34585_108_8}>
          <View style={styles.View_I1234_34585_108_8_1_2}>
            <Text style={styles.Text_I1234_34585_108_8_1_2}></Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_I1234_34585_108_9}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("1019_31631"))
          }
        />
        <View style={styles.View_I1234_34585_108_10}>
          <View style={styles.View_I1234_34585_108_10_1_97}>
            <Text style={styles.Text_I1234_34585_108_10_1_97}> DAPIL DPRD</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1234_34586}>
        <View style={styles.View_I1234_34586_103_1044}>
          <View style={styles.View_I1234_34586_103_1044_1_9}>
            <Text style={styles.Text_I1234_34586_103_1044_1_9}></Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_I1234_34586_103_1045}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("1019_31575"))
          }
        />
        <View style={styles.View_I1234_34586_103_1046}>
          <View style={styles.View_I1234_34586_103_1046_1_97}>
            <Text style={styles.Text_I1234_34586_103_1046_1_97}>KABUPATEN</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1234_34587}>
        <View style={styles.View_I1234_34587_108_108}>
          <View style={styles.View_I1234_34587_108_108_1_2}>
            <Text style={styles.Text_I1234_34587_108_108_1_2}></Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_I1234_34587_108_109}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("1019_31615"))
          }
        >
          <View style={styles.View_I1234_34587_108_109_2_193}>
            <Text style={styles.Text_I1234_34587_108_109_2_193}></Text>
          </View>
        </TouchableOpacity>
        <View style={styles.View_I1234_34587_108_110}>
          <View style={styles.View_I1234_34587_108_110_1_97}>
            <Text style={styles.Text_I1234_34587_108_110_1_97}>DAPIL DPRD</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1234_34588}>
        <View style={styles.View_I1234_34588_108_112}>
          <View style={styles.View_I1234_34588_108_112_1_2}>
            <Text style={styles.Text_I1234_34588_108_112_1_2}></Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_I1234_34588_108_113}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("1019_31619"))
          }
        >
          <View style={styles.View_I1234_34588_108_113_2_193}>
            <Text style={styles.Text_I1234_34588_108_113_2_193}></Text>
          </View>
        </TouchableOpacity>
        <View style={styles.View_I1234_34588_108_114}>
          <View style={styles.View_I1234_34588_108_114_1_97}>
            <Text style={styles.Text_I1234_34588_108_114_1_97}>
              KAB. MALANG
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1234_34589}>
        <View style={styles.View_I1234_34589_108_116}>
          <View style={styles.View_I1234_34589_108_116_1_2}>
            <Text style={styles.Text_I1234_34589_108_116_1_2}></Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_I1234_34589_108_117}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("1019_31623"))
          }
        >
          <View style={styles.View_I1234_34589_108_117_2_193}>
            <Text style={styles.Text_I1234_34589_108_117_2_193}></Text>
          </View>
        </TouchableOpacity>
        <View style={styles.View_I1234_34589_108_118}>
          <View style={styles.View_I1234_34589_108_118_1_97}>
            <Text style={styles.Text_I1234_34589_108_118_1_97}>KECAMATAN</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1234_34590}>
        <View style={styles.View_I1234_34590_108_16}>
          <View style={styles.View_I1234_34590_108_16_1_2}>
            <Text style={styles.Text_I1234_34590_108_16_1_2}></Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_I1234_34590_108_17}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("1019_31639"))
          }
        />
        <View style={styles.View_I1234_34590_108_18}>
          <View style={styles.View_I1234_34590_108_18_1_97}>
            <Text style={styles.Text_I1234_34590_108_18_1_97}>KEC. CAKUNG</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1234_34591}>
        <View style={styles.View_I1234_34591_108_16}>
          <View style={styles.View_I1234_34591_108_16_1_2}>
            <Text style={styles.Text_I1234_34591_108_16_1_2}></Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_I1234_34591_108_17}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("1019_31639"))
          }
        />
        <View style={styles.View_I1234_34591_108_18}>
          <View style={styles.View_I1234_34591_108_18_1_97}>
            <Text style={styles.Text_I1234_34591_108_18_1_97}>
              KEL. CAKUNG BARAT
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1234_34592}>
        <View style={styles.View_I1234_34592_108_16}>
          <View style={styles.View_I1234_34592_108_16_1_2}>
            <Text style={styles.Text_I1234_34592_108_16_1_2}></Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_I1234_34592_108_17}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("1019_31639"))
          }
        />
        <View style={styles.View_I1234_34592_108_18}>
          <View style={styles.View_I1234_34592_108_18_1_97}>
            <Text style={styles.Text_I1234_34592_108_18_1_97}>RW</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1234_34593}>
        <View style={styles.View_I1234_34593_108_48}>
          <View style={styles.View_I1234_34593_108_48_1_14}>
            <Text style={styles.Text_I1234_34593_108_48_1_14}></Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_I1234_34593_108_49}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("1019_31699"))
          }
        />
        <View style={styles.View_I1234_34593_108_50}>
          <View style={styles.View_I1234_34593_108_50_1_97}>
            <Text style={styles.Text_I1234_34593_108_50_1_97}>TPS</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1233_33767} />
      <View style={styles.View_1233_33768}>
        <View style={styles.View_I1233_33768_31_2828} />
        <View style={styles.View_I1233_33768_31_2829}>
          <Text style={styles.Text_I1233_33768_31_2829}>SIMPAN</Text>
        </View>
      </View>
      <View style={styles.View_1192_33014}>
        <View style={styles.View_1192_33015} />
        <View style={styles.View_1192_33016}>
          <Text style={styles.Text_1192_33016}>Distribusi</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f98e/4d77/9bab9a303da615ff26018316c7712711"
        }}
        style={styles.ImageBackground_1192_33104}
      />
      <View style={styles.View_1203_32989}>
        <View style={styles.View_1203_32990} />
        <View style={styles.View_1203_32991}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4cd1/ff5f/b7489a12526f11bfa190c20d2d06baa2"
            }}
            style={styles.ImageBackground_1203_32992}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0672/884a/5c390396a79c91602fe06b5f814953b5"
            }}
            style={styles.ImageBackground_1203_33046}
          />
        </View>
        <View style={styles.View_1203_33000}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4cd1/ff5f/b7489a12526f11bfa190c20d2d06baa2"
            }}
            style={styles.ImageBackground_1203_33001}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f69/0d69/748f381d2d057a0889b33add1f111ada"
            }}
            style={styles.ImageBackground_1203_33002}
          />
        </View>
        <View style={styles.View_1203_33016}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4cd1/ff5f/b7489a12526f11bfa190c20d2d06baa2"
            }}
            style={styles.ImageBackground_1203_33017}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
            }}
            style={styles.ImageBackground_1203_33018}
          />
          <View style={styles.View_1203_33021}>
            <View style={styles.View_1203_33022}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1928/c666/22daf8e324a70cb98be1ef368562f11c"
                }}
                style={styles.ImageBackground_1203_33049}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_1203_33026}>
          <View style={styles.View_1203_33027} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d611/cc1c/3ff1a82d7133a68af8926c04d25b2620"
            }}
            style={styles.ImageBackground_1203_33028}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("100%") },
  View_1192_33005: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("65%"),
    minHeight: hp("65%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1192_33109: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("7%")
  },
  ImageBackground_1192_33107: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%")
  },
  View_1192_33108: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_1192_33108: {
    color: "rgba(107, 107, 107, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1234_34895: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%")
  },
  View_1234_34869: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("-3%")
  },
  ImageBackground_1234_34870: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%")
  },
  View_1234_34871: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_1234_34871: {
    color: "rgba(107, 107, 107, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1192_33113: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("19%")
  },
  ImageBackground_1192_33114: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%")
  },
  View_1192_33115: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_1192_33115: {
    color: "rgba(107, 107, 107, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1192_33116: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%")
  },
  View_1233_33771: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("65%"),
    minHeight: hp("65%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("32%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1233_33772: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("33%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1233_33772_102_2768: {
    flexGrow: 1,
    width: wp("31%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1233_33772_102_2768_1_97: {
    flexGrow: 1,
    width: wp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1233_33772_102_2768_1_97: {
    color: "rgba(107, 107, 107, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1234_34584: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("39%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1234_34584_102_2766: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1234_34584_102_2766_1_9: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1234_34584_102_2766_1_9: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I1234_34584_102_2767: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1234_34584_102_2768: {
    flexGrow: 1,
    width: wp("25%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1234_34584_102_2768_1_97: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1234_34584_102_2768_1_97: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1234_34585: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("46%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1234_34585_108_8: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1234_34585_108_8_1_2: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1234_34585_108_8_1_2: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I1234_34585_108_9: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1234_34585_108_10: {
    flexGrow: 1,
    width: wp("26%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1234_34585_108_10_1_97: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1234_34585_108_10_1_97: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1234_34586: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("52%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1234_34586_103_1044: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1234_34586_103_1044_1_9: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1234_34586_103_1044_1_9: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I1234_34586_103_1045: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1234_34586_103_1046: {
    flexGrow: 1,
    width: wp("25%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1234_34586_103_1046_1_97: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1234_34586_103_1046_1_97: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1234_34587: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("59%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1234_34587_108_108: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1234_34587_108_108_1_2: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1234_34587_108_108_1_2: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I1234_34587_108_109: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1234_34587_108_109_2_193: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1234_34587_108_109_2_193: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1234_34587_108_110: {
    flexGrow: 1,
    width: wp("25%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1234_34587_108_110_1_97: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1234_34587_108_110_1_97: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1234_34588: {
    width: wp("46%"),
    minWidth: wp("46%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("66%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1234_34588_108_112: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1234_34588_108_112_1_2: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1234_34588_108_112_1_2: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I1234_34588_108_113: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1234_34588_108_113_2_193: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1234_34588_108_113_2_193: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1234_34588_108_114: {
    flexGrow: 1,
    width: wp("28%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1234_34588_108_114_1_97: {
    flexGrow: 1,
    width: wp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1234_34588_108_114_1_97: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1234_34589: {
    width: wp("51%"),
    minWidth: wp("51%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("72%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1234_34589_108_116: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1234_34589_108_116_1_2: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1234_34589_108_116_1_2: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I1234_34589_108_117: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1234_34589_108_117_2_193: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1234_34589_108_117_2_193: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1234_34589_108_118: {
    flexGrow: 1,
    width: wp("25%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1234_34589_108_118_1_97: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1234_34589_108_118_1_97: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1234_34590: {
    width: wp("53%"),
    minWidth: wp("53%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("79%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1234_34590_108_16: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1234_34590_108_16_1_2: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1234_34590_108_16_1_2: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I1234_34590_108_17: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1234_34590_108_18: {
    flexGrow: 1,
    width: wp("27%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1234_34590_108_18_1_97: {
    flexGrow: 1,
    width: wp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1234_34590_108_18_1_97: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1234_34591: {
    width: wp("66%"),
    minWidth: wp("66%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("85%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1234_34591_108_16: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1234_34591_108_16_1_2: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1234_34591_108_16_1_2: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I1234_34591_108_17: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1234_34591_108_18: {
    flexGrow: 1,
    width: wp("40%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1234_34591_108_18_1_97: {
    flexGrow: 1,
    width: wp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1234_34591_108_18_1_97: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1234_34592: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("92%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1234_34592_108_16: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1234_34592_108_16_1_2: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1234_34592_108_16_1_2: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I1234_34592_108_17: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1234_34592_108_18: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1234_34592_108_18_1_97: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1234_34592_108_18_1_97: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1234_34593: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("98%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1234_34593_108_48: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1234_34593_108_48_1_14: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1234_34593_108_48_1_14: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I1234_34593_108_49: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1234_34593_108_50: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1234_34593_108_50_1_97: {
    flexGrow: 1,
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1234_34593_108_50_1_97: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1233_33767: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("81%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1233_33768: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("83%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1233_33768_31_2828: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(73, 126, 254, 1)"
  },
  View_I1233_33768_31_2829: {
    flexGrow: 1,
    width: wp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I1233_33768_31_2829: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1192_33014: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1192_33015: {
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
  View_1192_33016: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_1192_33016: {
    color: "rgba(24, 23, 37, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1192_33104: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_1203_32989: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("93%")
  },
  View_1203_32990: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1203_32991: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("0%")
  },
  ImageBackground_1203_32992: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1203_33046: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_1203_33000: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("0%")
  },
  ImageBackground_1203_33001: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1203_33002: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_1203_33016: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1203_33017: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1203_33018: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_1203_33021: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_1203_33022: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1203_33049: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1203_33026: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("0%")
  },
  View_1203_33027: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 254, 254, 1)"
  },
  ImageBackground_1203_33028: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
