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
      <View style={styles.View_1148_33216}>
        <View style={styles.View_1148_33217}>
          <View style={styles.View_I1148_33217_102_2768}>
            <View style={styles.View_I1148_33217_102_2768_1_97}>
              <Text style={styles.Text_I1148_33217_102_2768_1_97}>
                DAPIL DPR RI
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_1148_33218}>
          <View style={styles.View_I1148_33218_108_204}>
            <View style={styles.View_I1148_33218_108_204_1_2}>
              <Text style={styles.Text_I1148_33218_108_204_1_2}></Text>
            </View>
          </View>
          <View style={styles.View_I1148_33218_108_206}>
            <View style={styles.View_I1148_33218_108_206_1_97}>
              <Text style={styles.Text_I1148_33218_108_206_1_97}>
                DAPIL DPRD
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_1148_33219}>
          <View style={styles.View_I1148_33219_108_76}>
            <View style={styles.View_I1148_33219_108_76_1_9}>
              <Text style={styles.Text_I1148_33219_108_76_1_9}></Text>
            </View>
          </View>
          <View style={styles.View_I1148_33219_108_78}>
            <View style={styles.View_I1148_33219_108_78_1_97}>
              <Text style={styles.Text_I1148_33219_108_78_1_97}>
                DAPIL KOTA
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_1148_33220}>
          <View style={styles.View_I1148_33220_108_204}>
            <View style={styles.View_I1148_33220_108_204_1_2}>
              <Text style={styles.Text_I1148_33220_108_204_1_2}></Text>
            </View>
          </View>
          <View style={styles.View_I1148_33220_108_206}>
            <View style={styles.View_I1148_33220_108_206_1_97}>
              <Text style={styles.Text_I1148_33220_108_206_1_97}>
                DAPIL DPRD
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_1148_33221}>
          <View style={styles.View_I1148_33221_108_208}>
            <View style={styles.View_I1148_33221_108_208_1_2}>
              <Text style={styles.Text_I1148_33221_108_208_1_2}></Text>
            </View>
          </View>
          <View style={styles.View_I1148_33221_108_210}>
            <View style={styles.View_I1148_33221_108_210_1_97}>
              <Text style={styles.Text_I1148_33221_108_210_1_97}>
                DAPIL KOTA
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_1148_33222}>
          <View style={styles.View_I1148_33222_108_212}>
            <View style={styles.View_I1148_33222_108_212_1_2}>
              <Text style={styles.Text_I1148_33222_108_212_1_2}></Text>
            </View>
          </View>
          <View style={styles.View_I1148_33222_108_214}>
            <View style={styles.View_I1148_33222_108_214_1_97}>
              <Text style={styles.Text_I1148_33222_108_214_1_97}>
                KEC. CAKUNG
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_1148_33223}>
          <View style={styles.View_I1148_33223_108_212}>
            <View style={styles.View_I1148_33223_108_212_1_2}>
              <Text style={styles.Text_I1148_33223_108_212_1_2}></Text>
            </View>
          </View>
          <View style={styles.View_I1148_33223_108_214}>
            <View style={styles.View_I1148_33223_108_214_1_97}>
              <Text style={styles.Text_I1148_33223_108_214_1_97}>
                KEL. CAKUNG BARAT
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_1148_33224}>
          <View style={styles.View_I1148_33224_108_212}>
            <View style={styles.View_I1148_33224_108_212_1_2}>
              <Text style={styles.Text_I1148_33224_108_212_1_2}></Text>
            </View>
          </View>
          <View style={styles.View_I1148_33224_108_214}>
            <View style={styles.View_I1148_33224_108_214_1_97}>
              <Text style={styles.Text_I1148_33224_108_214_1_97}>
                RW 1 / KOYO{" "}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_1148_33225}>
          <View style={styles.View_I1148_33225_108_244}>
            <View style={styles.View_I1148_33225_108_244_1_14}>
              <Text style={styles.Text_I1148_33225_108_244_1_14}></Text>
            </View>
          </View>
          <View style={styles.View_I1148_33225_108_246}>
            <View style={styles.View_I1148_33225_108_246_1_97}>
              <Text style={styles.Text_I1148_33225_108_246_1_97}>
                TPS 1 / TIYO
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_1148_33236}>
          <View style={styles.View_I1148_33236_102_2766}>
            <View style={styles.View_I1148_33236_102_2766_1_9}>
              <Text style={styles.Text_I1148_33236_102_2766_1_9}></Text>
            </View>
          </View>
          <View style={styles.View_I1148_33236_102_2768}>
            <View style={styles.View_I1148_33236_102_2768_1_97}>
              <Text style={styles.Text_I1148_33236_102_2768_1_97}>
                DAPIL DPRD
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_1148_33237}>
          <View style={styles.View_I1148_33237_102_2766}>
            <View style={styles.View_I1148_33237_102_2766_1_9}>
              <Text style={styles.Text_I1148_33237_102_2766_1_9}></Text>
            </View>
          </View>
          <View style={styles.View_I1148_33237_102_2768}>
            <View style={styles.View_I1148_33237_102_2768_1_97}>
              <Text style={styles.Text_I1148_33237_102_2768_1_97}>
                {" "}
                DAPIL DPRD
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_1148_33238}>
          <View style={styles.View_I1148_33238_108_208}>
            <View style={styles.View_I1148_33238_108_208_1_2}>
              <Text style={styles.Text_I1148_33238_108_208_1_2}></Text>
            </View>
          </View>
          <View style={styles.View_I1148_33238_108_209}>
            <View style={styles.View_I1148_33238_108_209_1_113}>
              <Text style={styles.Text_I1148_33238_108_209_1_113}>minus</Text>
            </View>
          </View>
          <View style={styles.View_I1148_33238_108_210}>
            <View style={styles.View_I1148_33238_108_210_1_97}>
              <Text style={styles.Text_I1148_33238_108_210_1_97}>
                🍒 DAPIL DPR
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_1148_33239}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("1019_31579"))
          }
        >
          <View style={styles.View_I1148_33239_103_1051}>
            <View style={styles.View_I1148_33239_103_1051_1_9}>
              <Text style={styles.Text_I1148_33239_103_1051_1_9}></Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_I1148_33239_103_1052}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("1019_31579"))
            }
          />
          <View style={styles.View_I1148_33239_103_1053}>
            <View style={styles.View_I1148_33239_103_1053_1_97}>
              <Text style={styles.Text_I1148_33239_103_1053_1_97}>
                DAPIL DPRD
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.View_1148_33324}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e82f/0503/6cc95a7d0ef21516e67f1970a1881c73"
            }}
            style={styles.ImageBackground_1148_33325}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ffcb/0e86/1c809c3ecbd70c57c5c957584b22d291"
            }}
            style={styles.ImageBackground_1148_33328}
          />
        </View>
        <View style={styles.View_1148_33331}>
          <View style={styles.View_1148_33332} />
          <View style={styles.View_1148_33333}>
            <Text style={styles.Text_1148_33333}>6</Text>
          </View>
        </View>
        <View style={styles.View_1148_33334} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0961/2a64/080133ec87df1cf2604da77232606f35"
          }}
          style={styles.ImageBackground_1154_33376}
        />
        <View style={styles.View_1180_32980}>
          <View style={styles.View_1148_33335}>
            <Text style={styles.Text_1148_33335}>25</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/508f/4df1/d13e5d70d261d4f629989fbfb8cf61ae"
            }}
            style={styles.ImageBackground_1154_33380}
          />
        </View>
        <View style={styles.View_1180_32984}>
          <View style={styles.View_1180_32985}>
            <Text style={styles.Text_1180_32985}>10</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/22fb/42a6/567fa27e6d327ca287cd51f4c27ef09b"
            }}
            style={styles.ImageBackground_1180_32986}
          />
        </View>
        <View style={styles.View_1180_32981}>
          <View style={styles.View_1180_32982}>
            <Text style={styles.Text_1180_32982}>6</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52b6/ed44/759eea4cd83b5288410f5d52680ee0ce"
            }}
            style={styles.ImageBackground_1180_32983}
          />
        </View>
        <View style={styles.View_1153_33367}>
          <View style={styles.View_1153_33368}>
            <Text style={styles.Text_1153_33368}>6</Text>
          </View>
          <View style={styles.View_1153_33369}>
            <View style={styles.View_1153_33370} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5914/f081/4795a139a7e2b95699dd278bfbbfdf5b"
              }}
              style={styles.ImageBackground_1153_33371}
            />
          </View>
          <View style={styles.View_1153_33372}>
            <View style={styles.View_1153_33373} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a71/f703/0c9cdcc1b68b3f11de2e8ae4b3eb0966"
              }}
              style={styles.ImageBackground_1153_33374}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_1148_32972}>
        <View style={styles.View_1148_32974}>
          <View style={styles.View_1148_32975} />
          <View style={styles.View_1148_32976}>
            <Text style={styles.Text_1148_32976}>TERITORI</Text>
          </View>
        </View>
        <View style={styles.View_1148_32983}>
          <View style={styles.View_1148_32984} />
          <View style={styles.View_1148_32985} />
        </View>
      </View>
      <View style={styles.View_1148_33004}>
        <View style={styles.View_1148_33005}>
          <View style={styles.View_1148_33006} />
          <View style={styles.View_1148_33007}>
            <Text style={styles.Text_1148_33007}>Wilayah</Text>
          </View>
        </View>
        <View style={styles.View_1148_33008}>
          <View style={styles.View_1148_33009} />
          <View style={styles.View_1148_33010} />
          <View style={styles.View_1148_33011}>
            <Text style={styles.Text_1148_33011}>Pengelolaan</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1148_33041}>
        <View style={styles.View_1148_33042} />
        <View style={styles.View_1148_33043}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4cd1/ff5f/b7489a12526f11bfa190c20d2d06baa2"
            }}
            style={styles.ImageBackground_1148_33044}
          />
          <View style={styles.View_1148_33045}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
              }}
              style={styles.ImageBackground_1148_33046}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/484d/73ac/8a2b2eea455d4669325d5c0fc60ecaf9"
              }}
              style={styles.ImageBackground_1148_33050}
            />
          </View>
        </View>
        <View style={styles.View_1148_33051}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4cd1/ff5f/b7489a12526f11bfa190c20d2d06baa2"
            }}
            style={styles.ImageBackground_1148_33052}
          />
          <View style={styles.View_1148_33053}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
              }}
              style={styles.ImageBackground_1148_33054}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe18/ba1b/14145df2f9ae0adfc76646741132f9c6"
              }}
              style={styles.ImageBackground_1148_33058}
            />
          </View>
        </View>
        <View style={styles.View_1148_33059}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4cd1/ff5f/b7489a12526f11bfa190c20d2d06baa2"
            }}
            style={styles.ImageBackground_1148_33060}
          />
          <View style={styles.View_1148_33061}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
              }}
              style={styles.ImageBackground_1148_33062}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/241f/bc68/3579ee0ef853a8dde9f81973b52f5f47"
              }}
              style={styles.ImageBackground_1148_33065}
            />
          </View>
        </View>
        <View style={styles.View_1148_33066}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4cd1/ff5f/b7489a12526f11bfa190c20d2d06baa2"
            }}
            style={styles.ImageBackground_1148_33067}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d9eb/131c/86dbf8f64342db7cc5fd286677a64bea"
            }}
            style={styles.ImageBackground_1148_33068}
          />
        </View>
        <View style={styles.View_1148_33071}>
          <View style={styles.View_1148_33072} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d611/cc1c/3ff1a82d7133a68af8926c04d25b2620"
            }}
            style={styles.ImageBackground_1148_33073}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("100%") },
  View_1148_33216: {
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
  View_1148_33217: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1148_33217_102_2768: {
    flexGrow: 1,
    width: wp("33%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1148_33217_102_2768_1_97: {
    flexGrow: 1,
    width: wp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1148_33217_102_2768_1_97: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1148_33218: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1148_33218_108_204: {
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
  View_I1148_33218_108_204_1_2: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1148_33218_108_204_1_2: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1148_33218_108_206: {
    flexGrow: 1,
    width: wp("25%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1148_33218_108_206_1_97: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1148_33218_108_206_1_97: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1148_33219: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("14%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1148_33219_108_76: {
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
  View_I1148_33219_108_76_1_9: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1148_33219_108_76_1_9: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1148_33219_108_78: {
    flexGrow: 1,
    width: wp("24%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1148_33219_108_78_1_97: {
    flexGrow: 1,
    width: wp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1148_33219_108_78_1_97: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1148_33220: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("21%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1148_33220_108_204: {
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
  View_I1148_33220_108_204_1_2: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1148_33220_108_204_1_2: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1148_33220_108_206: {
    flexGrow: 1,
    width: wp("25%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1148_33220_108_206_1_97: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1148_33220_108_206_1_97: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1148_33221: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("27%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1148_33221_108_208: {
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
  View_I1148_33221_108_208_1_2: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1148_33221_108_208_1_2: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1148_33221_108_210: {
    flexGrow: 1,
    width: wp("24%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1148_33221_108_210_1_97: {
    flexGrow: 1,
    width: wp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1148_33221_108_210_1_97: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1148_33222: {
    width: wp("46%"),
    minWidth: wp("46%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("34%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1148_33222_108_212: {
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
  View_I1148_33222_108_212_1_2: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1148_33222_108_212_1_2: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1148_33222_108_214: {
    flexGrow: 1,
    width: wp("27%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1148_33222_108_214_1_97: {
    flexGrow: 1,
    width: wp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1148_33222_108_214_1_97: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1148_33223: {
    width: wp("59%"),
    minWidth: wp("59%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("41%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1148_33223_108_212: {
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
  View_I1148_33223_108_212_1_2: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1148_33223_108_212_1_2: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1148_33223_108_214: {
    flexGrow: 1,
    width: wp("40%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1148_33223_108_214_1_97: {
    flexGrow: 1,
    width: wp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1148_33223_108_214_1_97: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1148_33224: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("47%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1148_33224_108_212: {
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
  View_I1148_33224_108_212_1_2: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1148_33224_108_212_1_2: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1148_33224_108_214: {
    flexGrow: 1,
    width: wp("24%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1148_33224_108_214_1_97: {
    flexGrow: 1,
    width: wp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1148_33224_108_214_1_97: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1148_33225: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("54%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1148_33225_108_244: {
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
  View_I1148_33225_108_244_1_14: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1148_33225_108_244_1_14: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1148_33225_108_246: {
    flexGrow: 1,
    width: wp("24%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1148_33225_108_246_1_97: {
    flexGrow: 1,
    width: wp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1148_33225_108_246_1_97: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1148_33236: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("60%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1148_33236_102_2766: {
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
  View_I1148_33236_102_2766_1_9: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1148_33236_102_2766_1_9: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1148_33236_102_2768: {
    flexGrow: 1,
    width: wp("25%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1148_33236_102_2768_1_97: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1148_33236_102_2768_1_97: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1148_33237: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("67%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1148_33237_102_2766: {
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
  View_I1148_33237_102_2766_1_9: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1148_33237_102_2766_1_9: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1148_33237_102_2768: {
    flexGrow: 1,
    width: wp("26%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1148_33237_102_2768_1_97: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1148_33237_102_2768_1_97: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1148_33238: {
    width: wp("46%"),
    minWidth: wp("46%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("80%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1148_33238_108_208: {
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
  View_I1148_33238_108_208_1_2: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1148_33238_108_208_1_2: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1148_33238_108_209: {
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
  View_I1148_33238_108_209_1_113: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1148_33238_108_209_1_113: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1148_33238_108_210: {
    flexGrow: 1,
    width: wp("27%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1148_33238_108_210_1_97: {
    flexGrow: 1,
    width: wp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1148_33238_108_210_1_97: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_1148_33239: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("86%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1148_33239_103_1051: {
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
  View_I1148_33239_103_1051_1_9: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1148_33239_103_1051_1_9: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I1148_33239_103_1052: {
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
  View_I1148_33239_103_1053: {
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
  View_I1148_33239_103_1053_1_97: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1148_33239_103_1053_1_97: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1148_33324: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("56%")
  },
  ImageBackground_1148_33325: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1148_33328: {
    width: wp("4%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_1148_33331: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    top: hp("55%")
  },
  View_1148_33332: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(230, 67, 91, 1)"
  },
  View_1148_33333: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1148_33333: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1148_33334: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("49%")
  },
  ImageBackground_1154_33376: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("48%"),
    resizeMode: "cover"
  },
  View_1180_32980: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("35%")
  },
  View_1148_33335: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_1148_33335: {
    color: "rgba(24, 23, 37, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  ImageBackground_1154_33380: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  View_1180_32984: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("35%")
  },
  View_1180_32985: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_1180_32985: {
    color: "rgba(24, 23, 37, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  ImageBackground_1180_32986: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  View_1180_32981: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("35%")
  },
  View_1180_32982: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_1180_32982: {
    color: "rgba(24, 23, 37, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  ImageBackground_1180_32983: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  View_1153_33367: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    top: hp("41%")
  },
  View_1153_33368: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_1153_33368: {
    color: "rgba(24, 23, 37, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_1153_33369: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  View_1153_33370: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(73, 126, 254, 1)"
  },
  ImageBackground_1153_33371: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_1153_33372: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%")
  },
  View_1153_33373: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(73, 126, 254, 1)"
  },
  ImageBackground_1153_33374: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_1148_32972: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1148_32974: {
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
  View_1148_32975: {
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
  View_1148_32976: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_1148_32976: {
    color: "rgba(24, 23, 37, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1148_32983: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17%")
  },
  View_1148_32984: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    opacity: 0
  },
  View_1148_32985: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("2%")
  },
  View_1148_33004: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%")
  },
  View_1148_33005: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1148_33006: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1148_33007: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_1148_33007: {
    color: "rgba(98, 60, 231, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1148_33008: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1148_33009: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1148_33010: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    backgroundColor: "rgba(98, 60, 231, 1)"
  },
  View_1148_33011: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_1148_33011: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1148_33041: {
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
  View_1148_33042: {
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
  View_1148_33043: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("0%")
  },
  ImageBackground_1148_33044: {
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
  View_1148_33045: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_1148_33046: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1148_33050: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1148_33051: {
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
  ImageBackground_1148_33052: {
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
  View_1148_33053: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_1148_33054: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1148_33058: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1148_33059: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("0%")
  },
  ImageBackground_1148_33060: {
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
  View_1148_33061: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_1148_33062: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1148_33065: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1148_33066: {
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
  ImageBackground_1148_33067: {
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
  ImageBackground_1148_33068: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_1148_33071: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("0%")
  },
  View_1148_33072: {
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
  ImageBackground_1148_33073: {
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
