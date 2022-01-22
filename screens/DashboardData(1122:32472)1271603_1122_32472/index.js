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
      <View style={styles.View_1122_32473}>
        <View style={styles.View_1122_32474}>
          <View style={styles.View_I1122_32474_102_2766}>
            <View style={styles.View_I1122_32474_102_2766_1_9}>
              <Text style={styles.Text_I1122_32474_102_2766_1_9}></Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_I1122_32474_102_2767}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("1019_31571"))
            }
          />
          <View style={styles.View_I1122_32474_102_2768}>
            <View style={styles.View_I1122_32474_102_2768_1_97}>
              <Text style={styles.Text_I1122_32474_102_2768_1_97}>
                DAPIL DPR
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_1122_32475}>
          <View style={styles.View_I1122_32475_108_204}>
            <View style={styles.View_I1122_32475_108_204_1_2}>
              <Text style={styles.Text_I1122_32475_108_204_1_2}></Text>
            </View>
          </View>
          <View style={styles.View_I1122_32475_108_205}>
            <View style={styles.View_I1122_32475_108_205_1_113}>
              <Text style={styles.Text_I1122_32475_108_205_1_113}>minus</Text>
            </View>
          </View>
          <View style={styles.View_I1122_32475_108_206}>
            <View style={styles.View_I1122_32475_108_206_1_97}>
              <Text style={styles.Text_I1122_32475_108_206_1_97}>
                {" "}
                DAPIL DPR
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_1122_32476}>
          <View style={styles.View_I1122_32476_103_1044}>
            <View style={styles.View_I1122_32476_103_1044_1_9}>
              <Text style={styles.Text_I1122_32476_103_1044_1_9}></Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_I1122_32476_103_1045}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("1019_31575"))
            }
          />
          <View style={styles.View_I1122_32476_103_1046}>
            <View style={styles.View_I1122_32476_103_1046_1_97}>
              <Text style={styles.Text_I1122_32476_103_1046_1_97}>
                {" "}
                DAPIL DPRD
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_1122_32477}>
          <View style={styles.View_I1122_32477_108_204}>
            <View style={styles.View_I1122_32477_108_204_1_2}>
              <Text style={styles.Text_I1122_32477_108_204_1_2}></Text>
            </View>
          </View>
          <View style={styles.View_I1122_32477_108_205}>
            <View style={styles.View_I1122_32477_108_205_1_113}>
              <Text style={styles.Text_I1122_32477_108_205_1_113}>minus</Text>
            </View>
          </View>
          <View style={styles.View_I1122_32477_108_206}>
            <View style={styles.View_I1122_32477_108_206_1_97}>
              <Text style={styles.Text_I1122_32477_108_206_1_97}>
                DAPIL DPR
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_1122_32478}>
          <View style={styles.View_I1122_32478_108_208}>
            <View style={styles.View_I1122_32478_108_208_1_2}>
              <Text style={styles.Text_I1122_32478_108_208_1_2}></Text>
            </View>
          </View>
          <View style={styles.View_I1122_32478_108_209}>
            <View style={styles.View_I1122_32478_108_209_1_113}>
              <Text style={styles.Text_I1122_32478_108_209_1_113}>minus</Text>
            </View>
          </View>
          <View style={styles.View_I1122_32478_108_210}>
            <View style={styles.View_I1122_32478_108_210_1_97}>
              <Text style={styles.Text_I1122_32478_108_210_1_97}>
                DAPIL DPRD
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_1122_32479}>
          <View style={styles.View_I1122_32479_108_212}>
            <View style={styles.View_I1122_32479_108_212_1_2}>
              <Text style={styles.Text_I1122_32479_108_212_1_2}></Text>
            </View>
          </View>
          <View style={styles.View_I1122_32479_108_213}>
            <View style={styles.View_I1122_32479_108_213_1_113}>
              <Text style={styles.Text_I1122_32479_108_213_1_113}>minus</Text>
            </View>
          </View>
          <View style={styles.View_I1122_32479_108_214}>
            <View style={styles.View_I1122_32479_108_214_1_97}>
              <Text style={styles.Text_I1122_32479_108_214_1_97}>
                DAPIL KOTA
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_1122_32480}>
          <View style={styles.View_I1122_32480_108_212}>
            <View style={styles.View_I1122_32480_108_212_1_2}>
              <Text style={styles.Text_I1122_32480_108_212_1_2}></Text>
            </View>
          </View>
          <View style={styles.View_I1122_32480_108_213}>
            <View style={styles.View_I1122_32480_108_213_1_113}>
              <Text style={styles.Text_I1122_32480_108_213_1_113}>minus</Text>
            </View>
          </View>
          <View style={styles.View_I1122_32480_108_214}>
            <View style={styles.View_I1122_32480_108_214_1_97}>
              <Text style={styles.Text_I1122_32480_108_214_1_97}>
                KECAMATAN
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_1122_32481}>
          <View style={styles.View_I1122_32481_108_212}>
            <View style={styles.View_I1122_32481_108_212_1_2}>
              <Text style={styles.Text_I1122_32481_108_212_1_2}></Text>
            </View>
          </View>
          <View style={styles.View_I1122_32481_108_213}>
            <View style={styles.View_I1122_32481_108_213_1_113}>
              <Text style={styles.Text_I1122_32481_108_213_1_113}>minus</Text>
            </View>
          </View>
          <View style={styles.View_I1122_32481_108_214}>
            <View style={styles.View_I1122_32481_108_214_1_97}>
              <Text style={styles.Text_I1122_32481_108_214_1_97}>
                KELURAHAN
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_1122_32482}>
          <View style={styles.View_I1122_32482_108_212}>
            <View style={styles.View_I1122_32482_108_212_1_2}>
              <Text style={styles.Text_I1122_32482_108_212_1_2}></Text>
            </View>
          </View>
          <View style={styles.View_I1122_32482_108_213}>
            <View style={styles.View_I1122_32482_108_213_1_113}>
              <Text style={styles.Text_I1122_32482_108_213_1_113}>minus</Text>
            </View>
          </View>
          <View style={styles.View_I1122_32482_108_214}>
            <View style={styles.View_I1122_32482_108_214_1_97}>
              <Text style={styles.Text_I1122_32482_108_214_1_97}>RW</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_1122_32483}>
          <View style={styles.View_I1122_32483_108_148}>
            <View style={styles.View_I1122_32483_108_148_1_14}>
              <Text style={styles.Text_I1122_32483_108_148_1_14}></Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_I1122_32483_108_149}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("1019_31683"))
            }
          >
            <View style={styles.View_I1122_32483_108_149_2_193}>
              <Text style={styles.Text_I1122_32483_108_149_2_193}></Text>
            </View>
          </TouchableOpacity>
          <View style={styles.View_I1122_32483_108_150}>
            <View style={styles.View_I1122_32483_108_150_1_97}>
              <Text style={styles.Text_I1122_32483_108_150_1_97}>TPS</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_1122_32484}>
          <View style={styles.View_I1122_32484_103_1044}>
            <View style={styles.View_I1122_32484_103_1044_1_9}>
              <Text style={styles.Text_I1122_32484_103_1044_1_9}></Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_I1122_32484_103_1045}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("1019_31575"))
            }
          />
          <View style={styles.View_I1122_32484_103_1046}>
            <View style={styles.View_I1122_32484_103_1046_1_97}>
              <Text style={styles.Text_I1122_32484_103_1046_1_97}>
                🍦DAPIL DPR
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_1122_32485}>
          <View style={styles.View_I1122_32485_103_1044}>
            <View style={styles.View_I1122_32485_103_1044_1_9}>
              <Text style={styles.Text_I1122_32485_103_1044_1_9}></Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_I1122_32485_103_1045}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("1019_31575"))
            }
          />
          <View style={styles.View_I1122_32485_103_1046}>
            <View style={styles.View_I1122_32485_103_1046_1_97}>
              <Text style={styles.Text_I1122_32485_103_1046_1_97}>
                🥐 DAPIL DPR
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_1122_32486}>
          <View style={styles.View_I1122_32486_108_208}>
            <View style={styles.View_I1122_32486_108_208_1_2}>
              <Text style={styles.Text_I1122_32486_108_208_1_2}></Text>
            </View>
          </View>
          <View style={styles.View_I1122_32486_108_209}>
            <View style={styles.View_I1122_32486_108_209_1_113}>
              <Text style={styles.Text_I1122_32486_108_209_1_113}>minus</Text>
            </View>
          </View>
          <View style={styles.View_I1122_32486_108_210}>
            <View style={styles.View_I1122_32486_108_210_1_97}>
              <Text style={styles.Text_I1122_32486_108_210_1_97}>
                🍒 DAPIL DPR
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_1122_32487}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("1019_31579"))
          }
        >
          <View style={styles.View_I1122_32487_103_1051}>
            <View style={styles.View_I1122_32487_103_1051_1_9}>
              <Text style={styles.Text_I1122_32487_103_1051_1_9}></Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_I1122_32487_103_1052}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("1019_31579"))
            }
          />
          <View style={styles.View_I1122_32487_103_1053}>
            <View style={styles.View_I1122_32487_103_1053_1_97}>
              <Text style={styles.Text_I1122_32487_103_1053_1_97}>
                DAPIL DPRD
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.View_1122_32488}>
        <View style={styles.View_1122_32490}>
          <View style={styles.View_1122_32491} />
          <View style={styles.View_1122_32492}>
            <Text style={styles.Text_1122_32492}>TERITORI</Text>
          </View>
        </View>
        <View style={styles.View_1122_32499}>
          <View style={styles.View_1122_32500} />
          <View style={styles.View_1122_32501} />
        </View>
      </View>
      <View style={styles.View_1122_32519}>
        <View style={styles.View_1122_32520}>
          <View style={styles.View_1122_32521} />
          <View style={styles.View_1122_32522}>
            <Text style={styles.Text_1122_32522}>Wilayah</Text>
          </View>
        </View>
        <View style={styles.View_1122_32523}>
          <View style={styles.View_1122_32524} />
          <View style={styles.View_1122_32525} />
          <View style={styles.View_1122_32526}>
            <Text style={styles.Text_1122_32526}>Pengelolaan</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1122_32556}>
        <View style={styles.View_1122_32557} />
        <View style={styles.View_1122_32558} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a9c9/3656/b276e7510851217cd041a344b440f34b"
          }}
          style={styles.ImageBackground_1122_32561}
        />
        <View style={styles.View_1122_32562}>
          <Text style={styles.Text_1122_32562}>
            Siapa yang ingin Anda Pilih?
          </Text>
        </View>
        <View style={styles.View_1122_32563} />
        <View style={styles.View_1122_32564}>
          <View style={styles.View_1122_32565}>
            <View style={styles.View_1122_32566}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/62d1/bac6/f37970ad54431b1a108ffe507a3a1896"
                }}
                style={styles.ImageBackground_1122_32567}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/51d5/59df/66783c3553c001a746b35a93e9111dcd"
                }}
                style={styles.ImageBackground_1122_32568}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a34/7ee3/9d697fbd810066bccdf4ca388f982fdb"
                }}
                style={styles.ImageBackground_1122_32569}
              />
            </View>
            <View style={styles.View_1122_32570}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/559e/525d/30996e9b655cddda0107ef42553fd3b1"
                }}
                style={styles.ImageBackground_1122_32571}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/51d5/59df/66783c3553c001a746b35a93e9111dcd"
                }}
                style={styles.ImageBackground_1122_32572}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b8a/13c1/6de15e0ca3b7dce2efeea0f7e2d723c5"
                }}
                style={styles.ImageBackground_1122_32573}
              />
            </View>
            <View style={styles.View_1122_32574}>
              <View style={styles.View_1122_32575}>
                <Text style={styles.Text_1122_32575}>Phillip</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_1122_32577}>
            <View style={styles.View_1122_32578}>
              <View style={styles.View_1122_32594}>
                <View style={styles.View_1122_32596}>
                  <View style={styles.View_1122_32597} />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f57b/34e6/3b29166e5fccda908ab60dbc6989b902"
                    }}
                    style={styles.ImageBackground_1122_32598}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_1122_32602}>
            <View style={styles.View_1122_32603}>
              <View style={styles.View_1122_32604}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/62d1/bac6/f37970ad54431b1a108ffe507a3a1896"
                  }}
                  style={styles.ImageBackground_1122_32605}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/51d5/59df/66783c3553c001a746b35a93e9111dcd"
                  }}
                  style={styles.ImageBackground_1122_32606}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ebc/8d6c/8218eba4256fc2c37e854f0e61dcd723"
                  }}
                  style={styles.ImageBackground_1122_32607}
                />
              </View>
            </View>
            <View style={styles.View_1122_32608}>
              <View style={styles.View_1122_32609}>
                <Text style={styles.Text_1122_32609}>Angela Smith</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_1122_32611}>
            <View style={styles.View_1122_32612}>
              <View style={styles.View_1122_32613}>
                <View style={styles.View_1122_32614}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/559e/525d/30996e9b655cddda0107ef42553fd3b1"
                    }}
                    style={styles.ImageBackground_1122_32615}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/51d5/59df/66783c3553c001a746b35a93e9111dcd"
                    }}
                    style={styles.ImageBackground_1122_32616}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ed4/797b/9b9f7a05d7248102bfa564ffc6b6551c"
                    }}
                    style={styles.ImageBackground_1122_32617}
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_1122_32618}>
              <View style={styles.View_1122_32619}>
                <Text style={styles.Text_1122_32619}>Karen William</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_1122_32621}>
            <View style={styles.View_1122_32622}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/62d1/bac6/f37970ad54431b1a108ffe507a3a1896"
                }}
                style={styles.ImageBackground_1122_32623}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/51d5/59df/66783c3553c001a746b35a93e9111dcd"
                }}
                style={styles.ImageBackground_1122_32624}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a34/7ee3/9d697fbd810066bccdf4ca388f982fdb"
                }}
                style={styles.ImageBackground_1122_32625}
              />
            </View>
            <View style={styles.View_1122_32626}>
              <View style={styles.View_1122_32627}>
                <Text style={styles.Text_1122_32627}>Samantha William</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_1122_32629}>
            <View style={styles.View_1122_32630}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/62d1/bac6/f37970ad54431b1a108ffe507a3a1896"
                }}
                style={styles.ImageBackground_1122_32631}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/51d5/59df/66783c3553c001a746b35a93e9111dcd"
                }}
                style={styles.ImageBackground_1122_32632}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a34/7ee3/9d697fbd810066bccdf4ca388f982fdb"
                }}
                style={styles.ImageBackground_1122_32633}
              />
            </View>
            <View style={styles.View_1122_32634}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/559e/525d/30996e9b655cddda0107ef42553fd3b1"
                }}
                style={styles.ImageBackground_1122_32635}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/51d5/59df/66783c3553c001a746b35a93e9111dcd"
                }}
                style={styles.ImageBackground_1122_32636}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b8a/13c1/6de15e0ca3b7dce2efeea0f7e2d723c5"
                }}
                style={styles.ImageBackground_1122_32637}
              />
            </View>
            <View style={styles.View_1122_32638}>
              <View style={styles.View_1122_32639}>
                <Text style={styles.Text_1122_32639}>Andy Hope</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_1122_32649}>
            <View style={styles.View_1122_32650}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/62d1/bac6/f37970ad54431b1a108ffe507a3a1896"
                }}
                style={styles.ImageBackground_1122_32651}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/51d5/59df/66783c3553c001a746b35a93e9111dcd"
                }}
                style={styles.ImageBackground_1122_32652}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a34/7ee3/9d697fbd810066bccdf4ca388f982fdb"
                }}
                style={styles.ImageBackground_1122_32653}
              />
            </View>
            <View style={styles.View_1122_32654}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/559e/525d/30996e9b655cddda0107ef42553fd3b1"
                }}
                style={styles.ImageBackground_1122_32655}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/51d5/59df/66783c3553c001a746b35a93e9111dcd"
                }}
                style={styles.ImageBackground_1122_32656}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b8a/13c1/6de15e0ca3b7dce2efeea0f7e2d723c5"
                }}
                style={styles.ImageBackground_1122_32657}
              />
            </View>
            <View style={styles.View_1122_32658} />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/be50/d05e/8117824d095e3d2e4854d814c32d69c1"
          }}
          style={styles.ImageBackground_1122_32662}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/be50/d05e/8117824d095e3d2e4854d814c32d69c1"
          }}
          style={styles.ImageBackground_1122_32663}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/be50/d05e/8117824d095e3d2e4854d814c32d69c1"
          }}
          style={styles.ImageBackground_1122_32664}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/be50/d05e/8117824d095e3d2e4854d814c32d69c1"
          }}
          style={styles.ImageBackground_1122_32665}
        />
      </View>
      <View style={styles.View_1122_32667} />
      <View style={styles.View_1122_32668}>
        <View style={styles.View_I1122_32668_31_2828} />
        <View style={styles.View_I1122_32668_31_2829}>
          <Text style={styles.Text_I1122_32668_31_2829}>Continue</Text>
        </View>
      </View>
      <View style={styles.View_1122_32669}>
        <View style={styles.View_1122_32670} />
        <View style={styles.View_1122_32671}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4cd1/ff5f/b7489a12526f11bfa190c20d2d06baa2"
            }}
            style={styles.ImageBackground_1122_32672}
          />
          <View style={styles.View_1122_32673}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
              }}
              style={styles.ImageBackground_1122_32674}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/484d/73ac/8a2b2eea455d4669325d5c0fc60ecaf9"
              }}
              style={styles.ImageBackground_1122_32678}
            />
          </View>
        </View>
        <View style={styles.View_1122_32679}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4cd1/ff5f/b7489a12526f11bfa190c20d2d06baa2"
            }}
            style={styles.ImageBackground_1122_32680}
          />
          <View style={styles.View_1122_32681}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
              }}
              style={styles.ImageBackground_1122_32682}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe18/ba1b/14145df2f9ae0adfc76646741132f9c6"
              }}
              style={styles.ImageBackground_1122_32686}
            />
          </View>
        </View>
        <View style={styles.View_1122_32687}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4cd1/ff5f/b7489a12526f11bfa190c20d2d06baa2"
            }}
            style={styles.ImageBackground_1122_32688}
          />
          <View style={styles.View_1122_32689}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
              }}
              style={styles.ImageBackground_1122_32690}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/241f/bc68/3579ee0ef853a8dde9f81973b52f5f47"
              }}
              style={styles.ImageBackground_1122_32693}
            />
          </View>
        </View>
        <View style={styles.View_1122_32694}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4cd1/ff5f/b7489a12526f11bfa190c20d2d06baa2"
            }}
            style={styles.ImageBackground_1122_32695}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d9eb/131c/86dbf8f64342db7cc5fd286677a64bea"
            }}
            style={styles.ImageBackground_1122_32696}
          />
        </View>
        <View style={styles.View_1122_32699}>
          <View style={styles.View_1122_32700} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d611/cc1c/3ff1a82d7133a68af8926c04d25b2620"
            }}
            style={styles.ImageBackground_1122_32701}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("100%") },
  View_1122_32473: {
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
  View_1122_32474: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_32474_102_2766: {
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
  View_I1122_32474_102_2766_1_9: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1122_32474_102_2766_1_9: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I1122_32474_102_2767: {
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
  View_I1122_32474_102_2768: {
    flexGrow: 1,
    width: wp("22%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_32474_102_2768_1_97: {
    flexGrow: 1,
    width: wp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1122_32474_102_2768_1_97: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_32475: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_32475_108_204: {
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
  View_I1122_32475_108_204_1_2: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1122_32475_108_204_1_2: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1122_32475_108_205: {
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
  View_I1122_32475_108_205_1_113: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1122_32475_108_205_1_113: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1122_32475_108_206: {
    flexGrow: 1,
    width: wp("23%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_32475_108_206_1_97: {
    flexGrow: 1,
    width: wp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1122_32475_108_206_1_97: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_32476: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("14%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_32476_103_1044: {
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
  View_I1122_32476_103_1044_1_9: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1122_32476_103_1044_1_9: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I1122_32476_103_1045: {
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
  View_I1122_32476_103_1046: {
    flexGrow: 1,
    width: wp("26%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_32476_103_1046_1_97: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1122_32476_103_1046_1_97: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_32477: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("21%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_32477_108_204: {
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
  View_I1122_32477_108_204_1_2: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1122_32477_108_204_1_2: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1122_32477_108_205: {
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
  View_I1122_32477_108_205_1_113: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1122_32477_108_205_1_113: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1122_32477_108_206: {
    flexGrow: 1,
    width: wp("22%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_32477_108_206_1_97: {
    flexGrow: 1,
    width: wp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1122_32477_108_206_1_97: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_32478: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("27%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_32478_108_208: {
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
  View_I1122_32478_108_208_1_2: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1122_32478_108_208_1_2: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1122_32478_108_209: {
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
  View_I1122_32478_108_209_1_113: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1122_32478_108_209_1_113: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1122_32478_108_210: {
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
  View_I1122_32478_108_210_1_97: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1122_32478_108_210_1_97: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_32479: {
    width: wp("49%"),
    minWidth: wp("49%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("34%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_32479_108_212: {
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
  View_I1122_32479_108_212_1_2: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1122_32479_108_212_1_2: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1122_32479_108_213: {
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
  View_I1122_32479_108_213_1_113: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1122_32479_108_213_1_113: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1122_32479_108_214: {
    flexGrow: 1,
    width: wp("24%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_32479_108_214_1_97: {
    flexGrow: 1,
    width: wp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1122_32479_108_214_1_97: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_32480: {
    width: wp("51%"),
    minWidth: wp("51%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("41%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_32480_108_212: {
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
  View_I1122_32480_108_212_1_2: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1122_32480_108_212_1_2: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1122_32480_108_213: {
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
  View_I1122_32480_108_213_1_113: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1122_32480_108_213_1_113: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1122_32480_108_214: {
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
  View_I1122_32480_108_214_1_97: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1122_32480_108_214_1_97: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_32481: {
    width: wp("51%"),
    minWidth: wp("51%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("47%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_32481_108_212: {
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
  View_I1122_32481_108_212_1_2: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1122_32481_108_212_1_2: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1122_32481_108_213: {
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
  View_I1122_32481_108_213_1_113: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1122_32481_108_213_1_113: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1122_32481_108_214: {
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
  View_I1122_32481_108_214_1_97: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1122_32481_108_214_1_97: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_32482: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("54%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_32482_108_212: {
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
  View_I1122_32482_108_212_1_2: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1122_32482_108_212_1_2: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1122_32482_108_213: {
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
  View_I1122_32482_108_213_1_113: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1122_32482_108_213_1_113: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1122_32482_108_214: {
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
  View_I1122_32482_108_214_1_97: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1122_32482_108_214_1_97: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_32483: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("60%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_32483_108_148: {
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
  View_I1122_32483_108_148_1_14: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1122_32483_108_148_1_14: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I1122_32483_108_149: {
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
  View_I1122_32483_108_149_2_193: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1122_32483_108_149_2_193: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1122_32483_108_150: {
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
  View_I1122_32483_108_150_1_97: {
    flexGrow: 1,
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1122_32483_108_150_1_97: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_32484: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("67%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_32484_103_1044: {
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
  View_I1122_32484_103_1044_1_9: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1122_32484_103_1044_1_9: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I1122_32484_103_1045: {
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
  View_I1122_32484_103_1046: {
    flexGrow: 1,
    width: wp("26%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_32484_103_1046_1_97: {
    flexGrow: 1,
    width: wp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1122_32484_103_1046_1_97: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_32485: {
    width: wp("46%"),
    minWidth: wp("46%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("73%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_32485_103_1044: {
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
  View_I1122_32485_103_1044_1_9: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1122_32485_103_1044_1_9: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I1122_32485_103_1045: {
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
  View_I1122_32485_103_1046: {
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
  View_I1122_32485_103_1046_1_97: {
    flexGrow: 1,
    width: wp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1122_32485_103_1046_1_97: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_32486: {
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
  View_I1122_32486_108_208: {
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
  View_I1122_32486_108_208_1_2: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1122_32486_108_208_1_2: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1122_32486_108_209: {
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
  View_I1122_32486_108_209_1_113: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1122_32486_108_209_1_113: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1122_32486_108_210: {
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
  View_I1122_32486_108_210_1_97: {
    flexGrow: 1,
    width: wp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1122_32486_108_210_1_97: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_1122_32487: {
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
  View_I1122_32487_103_1051: {
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
  View_I1122_32487_103_1051_1_9: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1122_32487_103_1051_1_9: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I1122_32487_103_1052: {
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
  View_I1122_32487_103_1053: {
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
  View_I1122_32487_103_1053_1_97: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1122_32487_103_1053_1_97: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_32488: {
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
  View_1122_32490: {
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
  View_1122_32491: {
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
  View_1122_32492: {
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
  Text_1122_32492: {
    color: "rgba(24, 23, 37, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_32499: {
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
  View_1122_32500: {
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
  View_1122_32501: {
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
  View_1122_32519: {
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
  View_1122_32520: {
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
  View_1122_32521: {
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
  View_1122_32522: {
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
  Text_1122_32522: {
    color: "rgba(119, 132, 238, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_32523: {
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
  View_1122_32524: {
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
  View_1122_32525: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    backgroundColor: "rgba(119, 132, 238, 1)"
  },
  View_1122_32526: {
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
  Text_1122_32526: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_32556: {
    width: wp("124%"),
    minWidth: wp("124%"),
    height: hp("85%"),
    minHeight: hp("85%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-24%"),
    top: hp("0%")
  },
  View_1122_32557: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("51%"),
    minHeight: hp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.5
  },
  View_1122_32558: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("24%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  ImageBackground_1122_32561: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("74%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("107%")
  },
  View_1122_32562: {
    width: wp("83%"),
    minWidth: wp("83%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("28%"),
    justifyContent: "flex-start"
  },
  Text_1122_32562: {
    color: "rgba(21, 20, 31, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_32563: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("21%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1122_32564: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("44%"),
    minHeight: hp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("35%")
  },
  View_1122_32565: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("38%")
  },
  View_1122_32566: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1122_32567: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1122_32568: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1122_32569: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_1122_32570: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1122_32571: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1122_32572: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1122_32573: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_1122_32574: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("1%")
  },
  View_1122_32575: {
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1122_32575: {
    color: "rgba(18, 18, 18, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_1122_32577: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1122_32578: {
    width: wp("56%"),
    minWidth: wp("56%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("38%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1122_32594: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("0%")
  },
  View_1122_32596: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1122_32597: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(20, 18, 30, 1)"
  },
  ImageBackground_1122_32598: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_1122_32602: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("0%")
  },
  View_1122_32603: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1122_32604: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1122_32605: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1122_32606: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1122_32607: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_1122_32608: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("1%")
  },
  View_1122_32609: {
    width: wp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1122_32609: {
    color: "rgba(18, 18, 18, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_1122_32611: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("10%")
  },
  View_1122_32612: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1122_32613: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1122_32614: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1122_32615: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1122_32616: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1122_32617: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_1122_32618: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("1%")
  },
  View_1122_32619: {
    width: wp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1122_32619: {
    color: "rgba(39, 39, 39, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_1122_32621: {
    width: wp("51%"),
    minWidth: wp("51%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("19%")
  },
  View_1122_32622: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1122_32623: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1122_32624: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1122_32625: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_1122_32626: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("1%")
  },
  View_1122_32627: {
    width: wp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1122_32627: {
    color: "rgba(18, 18, 18, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_1122_32629: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("29%")
  },
  View_1122_32630: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1122_32631: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1122_32632: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1122_32633: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_1122_32634: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1122_32635: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1122_32636: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1122_32637: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_1122_32638: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("1%")
  },
  View_1122_32639: {
    width: wp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1122_32639: {
    color: "rgba(18, 18, 18, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_1122_32649: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("29%")
  },
  View_1122_32650: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1122_32651: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1122_32652: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1122_32653: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_1122_32654: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1122_32655: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1122_32656: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1122_32657: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_1122_32658: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("1%")
  },
  ImageBackground_1122_32662: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("108%")
  },
  ImageBackground_1122_32663: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("108%")
  },
  ImageBackground_1122_32664: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("108%")
  },
  ImageBackground_1122_32665: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("65%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("108%")
  },
  View_1122_32667: {
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
  View_1122_32668: {
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
  View_I1122_32668_31_2828: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(119, 132, 238, 1)"
  },
  View_I1122_32668_31_2829: {
    flexGrow: 1,
    width: wp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I1122_32668_31_2829: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_32669: {
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
  View_1122_32670: {
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
  View_1122_32671: {
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
  ImageBackground_1122_32672: {
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
  View_1122_32673: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_1122_32674: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1122_32678: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1122_32679: {
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
  ImageBackground_1122_32680: {
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
  View_1122_32681: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_1122_32682: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1122_32686: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1122_32687: {
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
  ImageBackground_1122_32688: {
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
  View_1122_32689: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_1122_32690: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1122_32693: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1122_32694: {
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
  ImageBackground_1122_32695: {
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
  ImageBackground_1122_32696: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_1122_32699: {
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
  View_1122_32700: {
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
  ImageBackground_1122_32701: {
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
