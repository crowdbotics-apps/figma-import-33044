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
      <View style={styles.View_1231_33029}>
        <View style={styles.View_1231_33030}>
          <View style={styles.View_I1231_33030_102_2768}>
            <View style={styles.View_I1231_33030_102_2768_1_97}>
              <Text style={styles.Text_I1231_33030_102_2768_1_97}>
                DAPIL DPR RI
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_1231_33031}>
          <View style={styles.View_I1231_33031_108_204}>
            <View style={styles.View_I1231_33031_108_204_1_2}>
              <Text style={styles.Text_I1231_33031_108_204_1_2}></Text>
            </View>
          </View>
          <View style={styles.View_I1231_33031_108_206}>
            <View style={styles.View_I1231_33031_108_206_1_97}>
              <Text style={styles.Text_I1231_33031_108_206_1_97}>
                DAPIL DPRD
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_1231_33032}>
          <View style={styles.View_I1231_33032_108_76}>
            <View style={styles.View_I1231_33032_108_76_1_9}>
              <Text style={styles.Text_I1231_33032_108_76_1_9}></Text>
            </View>
          </View>
          <View style={styles.View_I1231_33032_108_78}>
            <View style={styles.View_I1231_33032_108_78_1_97}>
              <Text style={styles.Text_I1231_33032_108_78_1_97}>
                DAPIL KOTA
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_1231_33033}>
          <View style={styles.View_I1231_33033_108_204}>
            <View style={styles.View_I1231_33033_108_204_1_2}>
              <Text style={styles.Text_I1231_33033_108_204_1_2}></Text>
            </View>
          </View>
          <View style={styles.View_I1231_33033_108_206}>
            <View style={styles.View_I1231_33033_108_206_1_97}>
              <Text style={styles.Text_I1231_33033_108_206_1_97}>
                DAPIL DPRD
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_1231_33034}>
          <View style={styles.View_I1231_33034_108_208}>
            <View style={styles.View_I1231_33034_108_208_1_2}>
              <Text style={styles.Text_I1231_33034_108_208_1_2}></Text>
            </View>
          </View>
          <View style={styles.View_I1231_33034_108_210}>
            <View style={styles.View_I1231_33034_108_210_1_97}>
              <Text style={styles.Text_I1231_33034_108_210_1_97}>
                DAPIL KOTA
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_1231_33035}>
          <View style={styles.View_I1231_33035_108_212}>
            <View style={styles.View_I1231_33035_108_212_1_2}>
              <Text style={styles.Text_I1231_33035_108_212_1_2}></Text>
            </View>
          </View>
          <View style={styles.View_I1231_33035_108_214}>
            <View style={styles.View_I1231_33035_108_214_1_97}>
              <Text style={styles.Text_I1231_33035_108_214_1_97}>
                KEC. CAKUNG
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_1231_33036}>
          <View style={styles.View_I1231_33036_108_212}>
            <View style={styles.View_I1231_33036_108_212_1_2}>
              <Text style={styles.Text_I1231_33036_108_212_1_2}></Text>
            </View>
          </View>
          <View style={styles.View_I1231_33036_108_214}>
            <View style={styles.View_I1231_33036_108_214_1_97}>
              <Text style={styles.Text_I1231_33036_108_214_1_97}>
                KEL. CAKUNG BARAT
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_1231_33037}>
          <View style={styles.View_I1231_33037_108_212}>
            <View style={styles.View_I1231_33037_108_212_1_2}>
              <Text style={styles.Text_I1231_33037_108_212_1_2}></Text>
            </View>
          </View>
          <View style={styles.View_I1231_33037_108_214}>
            <View style={styles.View_I1231_33037_108_214_1_97}>
              <Text style={styles.Text_I1231_33037_108_214_1_97}>
                RW 1 / KOYO{" "}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_1231_33038}>
          <View style={styles.View_I1231_33038_108_244}>
            <View style={styles.View_I1231_33038_108_244_1_14}>
              <Text style={styles.Text_I1231_33038_108_244_1_14}></Text>
            </View>
          </View>
          <View style={styles.View_I1231_33038_108_246}>
            <View style={styles.View_I1231_33038_108_246_1_97}>
              <Text style={styles.Text_I1231_33038_108_246_1_97}>
                TPS 1 / TIYO
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_1231_33039}>
          <View style={styles.View_I1231_33039_102_2766}>
            <View style={styles.View_I1231_33039_102_2766_1_9}>
              <Text style={styles.Text_I1231_33039_102_2766_1_9}></Text>
            </View>
          </View>
          <View style={styles.View_I1231_33039_102_2768}>
            <View style={styles.View_I1231_33039_102_2768_1_97}>
              <Text style={styles.Text_I1231_33039_102_2768_1_97}>
                DAPIL DPRD
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_1231_33040}>
          <View style={styles.View_I1231_33040_102_2766}>
            <View style={styles.View_I1231_33040_102_2766_1_9}>
              <Text style={styles.Text_I1231_33040_102_2766_1_9}></Text>
            </View>
          </View>
          <View style={styles.View_I1231_33040_102_2768}>
            <View style={styles.View_I1231_33040_102_2768_1_97}>
              <Text style={styles.Text_I1231_33040_102_2768_1_97}>
                {" "}
                DAPIL DPRD
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_1231_33041}>
          <View style={styles.View_I1231_33041_108_208}>
            <View style={styles.View_I1231_33041_108_208_1_2}>
              <Text style={styles.Text_I1231_33041_108_208_1_2}></Text>
            </View>
          </View>
          <View style={styles.View_I1231_33041_108_209}>
            <View style={styles.View_I1231_33041_108_209_1_113}>
              <Text style={styles.Text_I1231_33041_108_209_1_113}>minus</Text>
            </View>
          </View>
          <View style={styles.View_I1231_33041_108_210}>
            <View style={styles.View_I1231_33041_108_210_1_97}>
              <Text style={styles.Text_I1231_33041_108_210_1_97}>
                🍒 DAPIL DPR
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_1231_33042}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("1019_31579"))
          }
        >
          <View style={styles.View_I1231_33042_103_1051}>
            <View style={styles.View_I1231_33042_103_1051_1_9}>
              <Text style={styles.Text_I1231_33042_103_1051_1_9}></Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_I1231_33042_103_1052}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("1019_31579"))
            }
          />
          <View style={styles.View_I1231_33042_103_1053}>
            <View style={styles.View_I1231_33042_103_1053_1_97}>
              <Text style={styles.Text_I1231_33042_103_1053_1_97}>
                DAPIL DPRD
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.View_1231_33043}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e82f/0503/6cc95a7d0ef21516e67f1970a1881c73"
            }}
            style={styles.ImageBackground_1231_33044}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ffcb/0e86/1c809c3ecbd70c57c5c957584b22d291"
            }}
            style={styles.ImageBackground_1231_33047}
          />
        </View>
        <View style={styles.View_1231_33050}>
          <View style={styles.View_1231_33051} />
          <View style={styles.View_1231_33052}>
            <Text style={styles.Text_1231_33052}>6</Text>
          </View>
        </View>
        <View style={styles.View_1231_33053} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0961/2a64/080133ec87df1cf2604da77232606f35"
          }}
          style={styles.ImageBackground_1231_33060}
        />
        <View style={styles.View_1231_33064}>
          <View style={styles.View_1231_33065}>
            <Text style={styles.Text_1231_33065}>25</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/508f/4df1/d13e5d70d261d4f629989fbfb8cf61ae"
            }}
            style={styles.ImageBackground_1231_33066}
          />
        </View>
        <View style={styles.View_1231_33067}>
          <View style={styles.View_1231_33068}>
            <Text style={styles.Text_1231_33068}>10</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/22fb/42a6/567fa27e6d327ca287cd51f4c27ef09b"
            }}
            style={styles.ImageBackground_1231_33069}
          />
        </View>
        <View style={styles.View_1231_33070}>
          <View style={styles.View_1231_33071}>
            <Text style={styles.Text_1231_33071}>6</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52b6/ed44/759eea4cd83b5288410f5d52680ee0ce"
            }}
            style={styles.ImageBackground_1231_33072}
          />
        </View>
        <View style={styles.View_1231_33073}>
          <View style={styles.View_1231_33074}>
            <Text style={styles.Text_1231_33074}>6</Text>
          </View>
          <View style={styles.View_1231_33075}>
            <View style={styles.View_1231_33076} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5914/f081/4795a139a7e2b95699dd278bfbbfdf5b"
              }}
              style={styles.ImageBackground_1231_33077}
            />
          </View>
          <View style={styles.View_1231_33078}>
            <View style={styles.View_1231_33079} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a71/f703/0c9cdcc1b68b3f11de2e8ae4b3eb0966"
              }}
              style={styles.ImageBackground_1231_33080}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_1231_33082}>
        <View style={styles.View_1231_33084}>
          <View style={styles.View_1231_33085} />
          <View style={styles.View_1231_33086}>
            <Text style={styles.Text_1231_33086}>TERITORI</Text>
          </View>
        </View>
        <View style={styles.View_1231_33093}>
          <View style={styles.View_1231_33094} />
          <View style={styles.View_1231_33095} />
        </View>
      </View>
      <View style={styles.View_1231_33114}>
        <View style={styles.View_1231_33115}>
          <View style={styles.View_1231_33116} />
          <View style={styles.View_1231_33117}>
            <Text style={styles.Text_1231_33117}>Wilayah</Text>
          </View>
        </View>
        <View style={styles.View_1231_33118}>
          <View style={styles.View_1231_33119} />
          <View style={styles.View_1231_33120} />
          <View style={styles.View_1231_33121}>
            <Text style={styles.Text_1231_33121}>Pengelolaan</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1231_33151}>
        <View style={styles.View_1231_33152} />
        <View style={styles.View_1231_33153}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4cd1/ff5f/b7489a12526f11bfa190c20d2d06baa2"
            }}
            style={styles.ImageBackground_1231_33154}
          />
          <View style={styles.View_1231_33155}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
              }}
              style={styles.ImageBackground_1231_33156}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/484d/73ac/8a2b2eea455d4669325d5c0fc60ecaf9"
              }}
              style={styles.ImageBackground_1231_33160}
            />
          </View>
        </View>
        <View style={styles.View_1231_33161}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4cd1/ff5f/b7489a12526f11bfa190c20d2d06baa2"
            }}
            style={styles.ImageBackground_1231_33162}
          />
          <View style={styles.View_1231_33163}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
              }}
              style={styles.ImageBackground_1231_33164}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe18/ba1b/14145df2f9ae0adfc76646741132f9c6"
              }}
              style={styles.ImageBackground_1231_33168}
            />
          </View>
        </View>
        <View style={styles.View_1231_33169}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4cd1/ff5f/b7489a12526f11bfa190c20d2d06baa2"
            }}
            style={styles.ImageBackground_1231_33170}
          />
          <View style={styles.View_1231_33171}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
              }}
              style={styles.ImageBackground_1231_33172}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/241f/bc68/3579ee0ef853a8dde9f81973b52f5f47"
              }}
              style={styles.ImageBackground_1231_33175}
            />
          </View>
        </View>
        <View style={styles.View_1231_33176}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4cd1/ff5f/b7489a12526f11bfa190c20d2d06baa2"
            }}
            style={styles.ImageBackground_1231_33177}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d9eb/131c/86dbf8f64342db7cc5fd286677a64bea"
            }}
            style={styles.ImageBackground_1231_33178}
          />
        </View>
        <View style={styles.View_1231_33181}>
          <View style={styles.View_1231_33182} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d611/cc1c/3ff1a82d7133a68af8926c04d25b2620"
            }}
            style={styles.ImageBackground_1231_33183}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("100%") },
  View_1231_33029: {
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
  View_1231_33030: {
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
  View_I1231_33030_102_2768: {
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
  View_I1231_33030_102_2768_1_97: {
    flexGrow: 1,
    width: wp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1231_33030_102_2768_1_97: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1231_33031: {
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
  View_I1231_33031_108_204: {
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
  View_I1231_33031_108_204_1_2: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1231_33031_108_204_1_2: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1231_33031_108_206: {
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
  View_I1231_33031_108_206_1_97: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1231_33031_108_206_1_97: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1231_33032: {
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
  View_I1231_33032_108_76: {
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
  View_I1231_33032_108_76_1_9: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1231_33032_108_76_1_9: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1231_33032_108_78: {
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
  View_I1231_33032_108_78_1_97: {
    flexGrow: 1,
    width: wp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1231_33032_108_78_1_97: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1231_33033: {
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
  View_I1231_33033_108_204: {
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
  View_I1231_33033_108_204_1_2: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1231_33033_108_204_1_2: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1231_33033_108_206: {
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
  View_I1231_33033_108_206_1_97: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1231_33033_108_206_1_97: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1231_33034: {
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
  View_I1231_33034_108_208: {
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
  View_I1231_33034_108_208_1_2: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1231_33034_108_208_1_2: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1231_33034_108_210: {
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
  View_I1231_33034_108_210_1_97: {
    flexGrow: 1,
    width: wp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1231_33034_108_210_1_97: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1231_33035: {
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
  View_I1231_33035_108_212: {
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
  View_I1231_33035_108_212_1_2: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1231_33035_108_212_1_2: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1231_33035_108_214: {
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
  View_I1231_33035_108_214_1_97: {
    flexGrow: 1,
    width: wp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1231_33035_108_214_1_97: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1231_33036: {
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
  View_I1231_33036_108_212: {
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
  View_I1231_33036_108_212_1_2: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1231_33036_108_212_1_2: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1231_33036_108_214: {
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
  View_I1231_33036_108_214_1_97: {
    flexGrow: 1,
    width: wp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1231_33036_108_214_1_97: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1231_33037: {
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
  View_I1231_33037_108_212: {
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
  View_I1231_33037_108_212_1_2: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1231_33037_108_212_1_2: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1231_33037_108_214: {
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
  View_I1231_33037_108_214_1_97: {
    flexGrow: 1,
    width: wp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1231_33037_108_214_1_97: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1231_33038: {
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
  View_I1231_33038_108_244: {
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
  View_I1231_33038_108_244_1_14: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1231_33038_108_244_1_14: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1231_33038_108_246: {
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
  View_I1231_33038_108_246_1_97: {
    flexGrow: 1,
    width: wp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1231_33038_108_246_1_97: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1231_33039: {
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
  View_I1231_33039_102_2766: {
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
  View_I1231_33039_102_2766_1_9: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1231_33039_102_2766_1_9: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1231_33039_102_2768: {
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
  View_I1231_33039_102_2768_1_97: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1231_33039_102_2768_1_97: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1231_33040: {
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
  View_I1231_33040_102_2766: {
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
  View_I1231_33040_102_2766_1_9: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1231_33040_102_2766_1_9: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1231_33040_102_2768: {
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
  View_I1231_33040_102_2768_1_97: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1231_33040_102_2768_1_97: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1231_33041: {
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
  View_I1231_33041_108_208: {
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
  View_I1231_33041_108_208_1_2: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1231_33041_108_208_1_2: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1231_33041_108_209: {
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
  View_I1231_33041_108_209_1_113: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1231_33041_108_209_1_113: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1231_33041_108_210: {
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
  View_I1231_33041_108_210_1_97: {
    flexGrow: 1,
    width: wp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1231_33041_108_210_1_97: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_1231_33042: {
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
  View_I1231_33042_103_1051: {
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
  View_I1231_33042_103_1051_1_9: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1231_33042_103_1051_1_9: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I1231_33042_103_1052: {
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
  View_I1231_33042_103_1053: {
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
  View_I1231_33042_103_1053_1_97: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1231_33042_103_1053_1_97: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1231_33043: {
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
  ImageBackground_1231_33044: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1231_33047: {
    width: wp("4%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_1231_33050: {
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
  View_1231_33051: {
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
  View_1231_33052: {
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
  Text_1231_33052: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1231_33053: {
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
  ImageBackground_1231_33060: {
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
  View_1231_33064: {
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
  View_1231_33065: {
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
  Text_1231_33065: {
    color: "rgba(24, 23, 37, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  ImageBackground_1231_33066: {
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
  View_1231_33067: {
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
  View_1231_33068: {
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
  Text_1231_33068: {
    color: "rgba(24, 23, 37, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  ImageBackground_1231_33069: {
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
  View_1231_33070: {
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
  View_1231_33071: {
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
  Text_1231_33071: {
    color: "rgba(24, 23, 37, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  ImageBackground_1231_33072: {
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
  View_1231_33073: {
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
  View_1231_33074: {
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
  Text_1231_33074: {
    color: "rgba(24, 23, 37, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_1231_33075: {
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
  View_1231_33076: {
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
  ImageBackground_1231_33077: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_1231_33078: {
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
  View_1231_33079: {
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
  ImageBackground_1231_33080: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_1231_33082: {
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
  View_1231_33084: {
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
  View_1231_33085: {
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
  View_1231_33086: {
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
  Text_1231_33086: {
    color: "rgba(24, 23, 37, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1231_33093: {
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
  View_1231_33094: {
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
  View_1231_33095: {
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
  View_1231_33114: {
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
  View_1231_33115: {
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
  View_1231_33116: {
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
  View_1231_33117: {
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
  Text_1231_33117: {
    color: "rgba(98, 60, 231, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1231_33118: {
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
  View_1231_33119: {
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
  View_1231_33120: {
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
  View_1231_33121: {
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
  Text_1231_33121: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1231_33151: {
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
  View_1231_33152: {
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
  View_1231_33153: {
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
  ImageBackground_1231_33154: {
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
  View_1231_33155: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_1231_33156: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1231_33160: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1231_33161: {
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
  ImageBackground_1231_33162: {
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
  View_1231_33163: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_1231_33164: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1231_33168: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1231_33169: {
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
  ImageBackground_1231_33170: {
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
  View_1231_33171: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_1231_33172: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1231_33175: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1231_33176: {
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
  ImageBackground_1231_33177: {
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
  ImageBackground_1231_33178: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_1231_33181: {
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
  View_1231_33182: {
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
  ImageBackground_1231_33183: {
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
