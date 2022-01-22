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
      <View style={styles.View_1122_32847}>
        <View style={styles.View_1122_32848}>
          <View style={styles.View_1122_32849}>
            <View style={styles.View_1122_32850} />
            <View style={styles.View_1122_32851}>
              <Text style={styles.Text_1122_32851}>Kalender</Text>
            </View>
            <View style={styles.View_1122_32852}>
              <View style={styles.View_1122_32853}>
                <View style={styles.View_1122_32854}>
                  <View style={styles.View_1122_32855}>
                    <Text style={styles.Text_1122_32855}>November 24</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_1122_32859}>
              <View style={styles.View_1122_32860} />
              <View style={styles.View_1122_32862}>
                <Text style={styles.Text_1122_32862}>Project Progress</Text>
              </View>
              <View style={styles.View_1122_32863}>
                <Text style={styles.Text_1122_32863}>0%</Text>
              </View>
            </View>
            <View style={styles.View_1122_32866}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7640/6c98/6c504732bbd9fab9c3238e33ab360426"
                }}
                style={styles.ImageBackground_1122_32867}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef62/6d1d/7513a654926e6cda4f63dca996bb5813"
                }}
                style={styles.ImageBackground_1122_32868}
              />
            </View>
          </View>
          <View style={styles.View_1122_32869}>
            <View style={styles.View_1122_32870} />
            <View style={styles.View_1122_32871}>
              <Text style={styles.Text_1122_32871}>Provinsi A2</Text>
            </View>
            <View style={styles.View_1122_32872}>
              <View style={styles.View_1122_32873}>
                <View style={styles.View_1122_32874}>
                  <View style={styles.View_1122_32875}>
                    <Text style={styles.Text_1122_32875}>November 24</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_1122_32879}>
              <View style={styles.View_1122_32880} />
              <View style={styles.View_1122_32881} />
              <View style={styles.View_1122_32882}>
                <Text style={styles.Text_1122_32882}>Project Progress</Text>
              </View>
              <View style={styles.View_1122_32883}>
                <Text style={styles.Text_1122_32883}>32%</Text>
              </View>
            </View>
            <View style={styles.View_1122_32885}>
              <View style={styles.View_I1122_32885_853_252}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a8a/4cda/d0886f0771a9651d65c1919c98c4fd33"
                  }}
                  style={styles.ImageBackground_I1122_32885_853_253}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/363c/2333/458f2d7a27dc5fcb0fb9255929e80ce2"
                  }}
                  style={styles.ImageBackground_I1122_32885_853_254}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7b49/bd33/d417a2c98b7f58ff41bf691ab5c12dcf"
                  }}
                  style={styles.ImageBackground_I1122_32885_853_255}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6452/f570/c558bdd5bc0cf020908cd316904202cc"
                  }}
                  style={styles.ImageBackground_I1122_32885_853_256}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c64/d2d7/47cb28825bb3e4f99c0825146c1688eb"
                  }}
                  style={styles.ImageBackground_I1122_32885_853_257}
                />
              </View>
              <View style={styles.View_I1122_32885_853_258}>
                <Text style={styles.Text_I1122_32885_853_258}>12 anggota</Text>
              </View>
            </View>
            <View style={styles.View_1122_32886}>
              <View style={styles.View_I1122_32886_853_242}>
                <Text style={styles.Text_I1122_32886_853_242}>
                  This is a description
                </Text>
              </View>
            </View>
            <View style={styles.View_1122_32887}>
              <View style={styles.View_1122_32888} />
              <View style={styles.View_1122_32889}>
                <Text style={styles.Text_1122_32889}>4</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_1122_32890}>
            <View style={styles.View_1122_32891} />
            <View style={styles.View_1122_32892}>
              <Text style={styles.Text_1122_32892}>Provinsi A3</Text>
            </View>
            <View style={styles.View_1122_32893}>
              <View style={styles.View_1122_32894}>
                <View style={styles.View_1122_32895}>
                  <View style={styles.View_1122_32896}>
                    <Text style={styles.Text_1122_32896}>November 24</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_1122_32900}>
              <View style={styles.View_1122_32901} />
              <View style={styles.View_1122_32902} />
              <View style={styles.View_1122_32903}>
                <Text style={styles.Text_1122_32903}>Project Progress</Text>
              </View>
              <View style={styles.View_1122_32904}>
                <Text style={styles.Text_1122_32904}>32%</Text>
              </View>
            </View>
            <View style={styles.View_1122_32906}>
              <View style={styles.View_I1122_32906_853_252}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a8a/4cda/d0886f0771a9651d65c1919c98c4fd33"
                  }}
                  style={styles.ImageBackground_I1122_32906_853_253}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/363c/2333/458f2d7a27dc5fcb0fb9255929e80ce2"
                  }}
                  style={styles.ImageBackground_I1122_32906_853_254}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7b49/bd33/d417a2c98b7f58ff41bf691ab5c12dcf"
                  }}
                  style={styles.ImageBackground_I1122_32906_853_255}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6452/f570/c558bdd5bc0cf020908cd316904202cc"
                  }}
                  style={styles.ImageBackground_I1122_32906_853_256}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c64/d2d7/47cb28825bb3e4f99c0825146c1688eb"
                  }}
                  style={styles.ImageBackground_I1122_32906_853_257}
                />
              </View>
              <View style={styles.View_I1122_32906_853_258}>
                <Text style={styles.Text_I1122_32906_853_258}>12 members</Text>
              </View>
            </View>
            <View style={styles.View_1122_32907}>
              <View style={styles.View_I1122_32907_853_242}>
                <Text style={styles.Text_I1122_32907_853_242}>
                  This is a description
                </Text>
              </View>
            </View>
            <View style={styles.View_1122_32908} />
            <View style={styles.View_1122_32909}>
              <Text style={styles.Text_1122_32909}>4</Text>
            </View>
          </View>
          <View style={styles.View_1122_32910}>
            <View style={styles.View_1122_32911} />
            <View style={styles.View_1122_32912}>
              <Text style={styles.Text_1122_32912}>Provinsi A4</Text>
            </View>
            <View style={styles.View_1122_32913}>
              <View style={styles.View_1122_32914}>
                <View style={styles.View_1122_32915}>
                  <View style={styles.View_1122_32916}>
                    <Text style={styles.Text_1122_32916}>November 24</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_1122_32920}>
              <View style={styles.View_1122_32921} />
              <View style={styles.View_1122_32922} />
              <View style={styles.View_1122_32923}>
                <Text style={styles.Text_1122_32923}>Project Progress</Text>
              </View>
              <View style={styles.View_1122_32924}>
                <Text style={styles.Text_1122_32924}>32%</Text>
              </View>
            </View>
            <View style={styles.View_1122_32926}>
              <View style={styles.View_I1122_32926_853_252}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a8a/4cda/d0886f0771a9651d65c1919c98c4fd33"
                  }}
                  style={styles.ImageBackground_I1122_32926_853_253}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/363c/2333/458f2d7a27dc5fcb0fb9255929e80ce2"
                  }}
                  style={styles.ImageBackground_I1122_32926_853_254}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7b49/bd33/d417a2c98b7f58ff41bf691ab5c12dcf"
                  }}
                  style={styles.ImageBackground_I1122_32926_853_255}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6452/f570/c558bdd5bc0cf020908cd316904202cc"
                  }}
                  style={styles.ImageBackground_I1122_32926_853_256}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c64/d2d7/47cb28825bb3e4f99c0825146c1688eb"
                  }}
                  style={styles.ImageBackground_I1122_32926_853_257}
                />
              </View>
              <View style={styles.View_I1122_32926_853_258}>
                <Text style={styles.Text_I1122_32926_853_258}>12 members</Text>
              </View>
            </View>
            <View style={styles.View_1122_32927}>
              <View style={styles.View_I1122_32927_853_242}>
                <Text style={styles.Text_I1122_32927_853_242}>
                  This is a description
                </Text>
              </View>
            </View>
            <View style={styles.View_1122_32928} />
            <View style={styles.View_1122_32929}>
              <Text style={styles.Text_1122_32929}>4</Text>
            </View>
          </View>
          <View style={styles.View_1122_32930}>
            <View style={styles.View_1122_32931} />
            <View style={styles.View_1122_32932}>
              <Text style={styles.Text_1122_32932}>Provinsi A5</Text>
            </View>
            <View style={styles.View_1122_32933}>
              <View style={styles.View_1122_32934}>
                <View style={styles.View_1122_32935}>
                  <View style={styles.View_1122_32936}>
                    <Text style={styles.Text_1122_32936}>November 24</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_1122_32940}>
              <View style={styles.View_1122_32941} />
              <View style={styles.View_1122_32942} />
              <View style={styles.View_1122_32943}>
                <Text style={styles.Text_1122_32943}>Project Progress</Text>
              </View>
              <View style={styles.View_1122_32944}>
                <Text style={styles.Text_1122_32944}>32%</Text>
              </View>
            </View>
            <View style={styles.View_1122_32946}>
              <View style={styles.View_I1122_32946_853_252}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a8a/4cda/d0886f0771a9651d65c1919c98c4fd33"
                  }}
                  style={styles.ImageBackground_I1122_32946_853_253}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/363c/2333/458f2d7a27dc5fcb0fb9255929e80ce2"
                  }}
                  style={styles.ImageBackground_I1122_32946_853_254}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7b49/bd33/d417a2c98b7f58ff41bf691ab5c12dcf"
                  }}
                  style={styles.ImageBackground_I1122_32946_853_255}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6452/f570/c558bdd5bc0cf020908cd316904202cc"
                  }}
                  style={styles.ImageBackground_I1122_32946_853_256}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c64/d2d7/47cb28825bb3e4f99c0825146c1688eb"
                  }}
                  style={styles.ImageBackground_I1122_32946_853_257}
                />
              </View>
              <View style={styles.View_I1122_32946_853_258}>
                <Text style={styles.Text_I1122_32946_853_258}>12 members</Text>
              </View>
            </View>
            <View style={styles.View_1122_32947}>
              <View style={styles.View_I1122_32947_853_242}>
                <Text style={styles.Text_I1122_32947_853_242}>
                  This is a description
                </Text>
              </View>
            </View>
            <View style={styles.View_1122_32948} />
            <View style={styles.View_1122_32949}>
              <Text style={styles.Text_1122_32949}>4</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_1122_32950}>
          <View style={styles.View_1122_32951}>
            <Text style={styles.Text_1122_32951}>Provinsi A</Text>
          </View>
          <View style={styles.View_1122_32952}>
            <Text style={styles.Text_1122_32952}>See all</Text>
          </View>
        </View>
        <View style={styles.View_1122_32953}>
          <View style={styles.View_1122_32954}>
            <View style={styles.View_1122_32955} />
            <View style={styles.View_1122_32956}>
              <Text style={styles.Text_1122_32956}>Buat Teritori</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7295/b977/ba4a9e6fb0616507cebe038b471ab4b8"
            }}
            style={styles.ImageBackground_1122_32957}
          />
        </View>
      </View>
      <View style={styles.View_1122_32958}>
        <View style={styles.View_1122_32959}>
          <View style={styles.View_1122_32960} />
          <View style={styles.View_1122_32961}>
            <Text style={styles.Text_1122_32961}>Wilayah</Text>
          </View>
        </View>
        <View style={styles.View_1122_32962}>
          <View style={styles.View_1122_32963} />
          <View style={styles.View_1122_32964} />
          <View style={styles.View_1122_32965}>
            <Text style={styles.Text_1122_32965}>Penglolaan</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1122_32995} />
      <View style={styles.View_1122_32996}>
        <View style={styles.View_1122_32997}>
          <View style={styles.View_1122_32998} />
          <View style={styles.View_1122_32999}>
            <View style={styles.View_I1122_32999_878_1321}>
              <Text style={styles.Text_I1122_32999_878_1321}>Terbaru</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_1122_33000}>
          <View style={styles.View_1122_33001} />
          <View style={styles.View_1122_33002}>
            <View style={styles.View_I1122_33002_878_1321}>
              <Text style={styles.Text_I1122_33002_878_1321}>
                Tanggal Dibuat
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_1122_33003}>
          <View style={styles.View_1122_33004} />
          <View style={styles.View_1122_33005}>
            <View style={styles.View_I1122_33005_878_1321}>
              <Text style={styles.Text_I1122_33005_878_1321}>
                Teritori Selesai
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1122_33006}>
        <View style={styles.View_1122_33007}>
          <View style={styles.View_1122_33008} />
          <View style={styles.View_1122_33009}>
            <Text style={styles.Text_1122_33009}>DAPIL PROVINSI</Text>
          </View>
          <View style={styles.View_1122_33010}>
            <Text style={styles.Text_1122_33010}>DAPIL KOTA</Text>
          </View>
          <View style={styles.View_1122_33011}>
            <Text style={styles.Text_1122_33011}>KECAMATAN</Text>
          </View>
          <View style={styles.View_1122_33012}>
            <Text style={styles.Text_1122_33012}>KELURAHAN</Text>
          </View>
          <View style={styles.View_1122_33013}>
            <Text style={styles.Text_1122_33013}>TPS</Text>
          </View>
          <View style={styles.View_1122_33014} />
          <View style={styles.View_1122_33015}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bed8/5140/ee5a56efece52add6d849405b699846c"
              }}
              style={styles.ImageBackground_1122_33016}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e460/1575/d4f1528fccb88ca9a5825c2ecbe4ef06"
              }}
              style={styles.ImageBackground_1122_33017}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_1122_33018}>
        <Text style={styles.Text_1122_33018}>TERITORI</Text>
      </View>
      <View style={styles.View_1122_33019}>
        <View style={styles.View_1122_33020} />
        <View style={styles.View_1122_33021}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4cd1/ff5f/b7489a12526f11bfa190c20d2d06baa2"
            }}
            style={styles.ImageBackground_1122_33022}
          />
          <View style={styles.View_1122_33023}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
              }}
              style={styles.ImageBackground_1122_33024}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/484d/73ac/8a2b2eea455d4669325d5c0fc60ecaf9"
              }}
              style={styles.ImageBackground_1122_33028}
            />
          </View>
        </View>
        <View style={styles.View_1122_33029}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4cd1/ff5f/b7489a12526f11bfa190c20d2d06baa2"
            }}
            style={styles.ImageBackground_1122_33030}
          />
          <View style={styles.View_1122_33031}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
              }}
              style={styles.ImageBackground_1122_33032}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe18/ba1b/14145df2f9ae0adfc76646741132f9c6"
              }}
              style={styles.ImageBackground_1122_33036}
            />
          </View>
        </View>
        <View style={styles.View_1122_33037}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4cd1/ff5f/b7489a12526f11bfa190c20d2d06baa2"
            }}
            style={styles.ImageBackground_1122_33038}
          />
          <View style={styles.View_1122_33039}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
              }}
              style={styles.ImageBackground_1122_33040}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/241f/bc68/3579ee0ef853a8dde9f81973b52f5f47"
              }}
              style={styles.ImageBackground_1122_33043}
            />
          </View>
        </View>
        <View style={styles.View_1122_33044}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4cd1/ff5f/b7489a12526f11bfa190c20d2d06baa2"
            }}
            style={styles.ImageBackground_1122_33045}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d9eb/131c/86dbf8f64342db7cc5fd286677a64bea"
            }}
            style={styles.ImageBackground_1122_33046}
          />
        </View>
        <View style={styles.View_1122_33049}>
          <View style={styles.View_1122_33050} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d611/cc1c/3ff1a82d7133a68af8926c04d25b2620"
            }}
            style={styles.ImageBackground_1122_33051}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("100%") },
  View_1122_32847: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("69%"),
    minHeight: hp("69%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("32%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1122_32848: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("14%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1122_32849: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1122_32850: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1122_32851: {
    width: wp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_1122_32851: {
    color: "rgba(18, 18, 18, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.30000001192092896,
    textTransform: "none"
  },
  View_1122_32852: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("8%")
  },
  View_1122_32853: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1122_32854: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1122_32855: {
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1122_32855: {
    color: "rgba(18, 18, 18, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.30000001192092896,
    textTransform: "none"
  },
  View_1122_32859: {
    width: wp("70%"),
    minWidth: wp("70%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("16%")
  },
  View_1122_32860: {
    width: wp("70%"),
    minWidth: wp("70%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    backgroundColor: "rgba(52, 167, 112, 1)"
  },
  View_1122_32862: {
    width: wp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1122_32862: {
    color: "rgba(18, 18, 18, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.30000001192092896,
    textTransform: "none"
  },
  View_1122_32863: {
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1122_32863: {
    color: "rgba(18, 18, 18, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.30000001192092896,
    textTransform: "none"
  },
  View_1122_32866: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("5%")
  },
  ImageBackground_1122_32867: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1122_32868: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1122_32869: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("27%")
  },
  View_1122_32870: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1122_32871: {
    width: wp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_1122_32871: {
    color: "rgba(18, 18, 18, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.30000001192092896,
    textTransform: "none"
  },
  View_1122_32872: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("8%")
  },
  View_1122_32873: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1122_32874: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1122_32875: {
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1122_32875: {
    color: "rgba(18, 18, 18, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.30000001192092896,
    textTransform: "none"
  },
  View_1122_32879: {
    width: wp("70%"),
    minWidth: wp("70%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("16%")
  },
  View_1122_32880: {
    width: wp("70%"),
    minWidth: wp("70%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    backgroundColor: "rgba(52, 167, 112, 1)"
  },
  View_1122_32881: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    backgroundColor: "rgba(70, 189, 132, 1)"
  },
  View_1122_32882: {
    width: wp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1122_32882: {
    color: "rgba(18, 18, 18, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.30000001192092896,
    textTransform: "none"
  },
  View_1122_32883: {
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1122_32883: {
    color: "rgba(18, 18, 18, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.30000001192092896,
    textTransform: "none"
  },
  View_1122_32885: {
    flexGrow: 1,
    width: wp("76%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("24%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I1122_32885_853_252: {
    flexGrow: 1,
    width: wp("39%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I1122_32885_853_253: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I1122_32885_853_254: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_I1122_32885_853_255: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_I1122_32885_853_256: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  ImageBackground_I1122_32885_853_257: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%")
  },
  View_I1122_32885_853_258: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1122_32885_853_258: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.055,
    textTransform: "none"
  },
  View_1122_32886: {
    flexGrow: 1,
    width: wp("76%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("12%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_32886_853_242: {
    flexGrow: 1,
    width: wp("76%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1122_32886_853_242: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.055,
    textTransform: "none"
  },
  View_1122_32887: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    top: hp("5%")
  },
  View_1122_32888: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(230, 67, 91, 1)"
  },
  View_1122_32889: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1122_32889: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_32890: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("58%")
  },
  View_1122_32891: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1122_32892: {
    width: wp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_1122_32892: {
    color: "rgba(18, 18, 18, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.30000001192092896,
    textTransform: "none"
  },
  View_1122_32893: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("8%")
  },
  View_1122_32894: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1122_32895: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1122_32896: {
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1122_32896: {
    color: "rgba(18, 18, 18, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.30000001192092896,
    textTransform: "none"
  },
  View_1122_32900: {
    width: wp("70%"),
    minWidth: wp("70%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("16%")
  },
  View_1122_32901: {
    width: wp("70%"),
    minWidth: wp("70%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    backgroundColor: "rgba(52, 167, 112, 1)"
  },
  View_1122_32902: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    backgroundColor: "rgba(70, 189, 132, 1)"
  },
  View_1122_32903: {
    width: wp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1122_32903: {
    color: "rgba(18, 18, 18, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.30000001192092896,
    textTransform: "none"
  },
  View_1122_32904: {
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1122_32904: {
    color: "rgba(18, 18, 18, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.30000001192092896,
    textTransform: "none"
  },
  View_1122_32906: {
    flexGrow: 1,
    width: wp("76%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("24%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I1122_32906_853_252: {
    flexGrow: 1,
    width: wp("39%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I1122_32906_853_253: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I1122_32906_853_254: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_I1122_32906_853_255: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_I1122_32906_853_256: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  ImageBackground_I1122_32906_853_257: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%")
  },
  View_I1122_32906_853_258: {
    flexGrow: 1,
    width: wp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1122_32906_853_258: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.055,
    textTransform: "none"
  },
  View_1122_32907: {
    flexGrow: 1,
    width: wp("76%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("12%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_32907_853_242: {
    flexGrow: 1,
    width: wp("76%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1122_32907_853_242: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.055,
    textTransform: "none"
  },
  View_1122_32908: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    top: hp("5%"),
    backgroundColor: "rgba(230, 67, 91, 1)"
  },
  View_1122_32909: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_1122_32909: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_32910: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("90%")
  },
  View_1122_32911: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1122_32912: {
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_1122_32912: {
    color: "rgba(18, 18, 18, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.30000001192092896,
    textTransform: "none"
  },
  View_1122_32913: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("8%")
  },
  View_1122_32914: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1122_32915: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1122_32916: {
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1122_32916: {
    color: "rgba(18, 18, 18, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.30000001192092896,
    textTransform: "none"
  },
  View_1122_32920: {
    width: wp("70%"),
    minWidth: wp("70%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("16%")
  },
  View_1122_32921: {
    width: wp("70%"),
    minWidth: wp("70%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    backgroundColor: "rgba(52, 167, 112, 1)"
  },
  View_1122_32922: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    backgroundColor: "rgba(70, 189, 132, 1)"
  },
  View_1122_32923: {
    width: wp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1122_32923: {
    color: "rgba(18, 18, 18, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.30000001192092896,
    textTransform: "none"
  },
  View_1122_32924: {
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1122_32924: {
    color: "rgba(18, 18, 18, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.30000001192092896,
    textTransform: "none"
  },
  View_1122_32926: {
    flexGrow: 1,
    width: wp("76%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("24%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I1122_32926_853_252: {
    flexGrow: 1,
    width: wp("39%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I1122_32926_853_253: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I1122_32926_853_254: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_I1122_32926_853_255: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_I1122_32926_853_256: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  ImageBackground_I1122_32926_853_257: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%")
  },
  View_I1122_32926_853_258: {
    flexGrow: 1,
    width: wp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1122_32926_853_258: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.055,
    textTransform: "none"
  },
  View_1122_32927: {
    flexGrow: 1,
    width: wp("76%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("12%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_32927_853_242: {
    flexGrow: 1,
    width: wp("76%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1122_32927_853_242: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.055,
    textTransform: "none"
  },
  View_1122_32928: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    top: hp("5%"),
    backgroundColor: "rgba(230, 67, 91, 1)"
  },
  View_1122_32929: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_1122_32929: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_32930: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("122%")
  },
  View_1122_32931: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1122_32932: {
    width: wp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_1122_32932: {
    color: "rgba(18, 18, 18, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.30000001192092896,
    textTransform: "none"
  },
  View_1122_32933: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("8%")
  },
  View_1122_32934: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1122_32935: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1122_32936: {
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1122_32936: {
    color: "rgba(18, 18, 18, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.30000001192092896,
    textTransform: "none"
  },
  View_1122_32940: {
    width: wp("70%"),
    minWidth: wp("70%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("16%")
  },
  View_1122_32941: {
    width: wp("70%"),
    minWidth: wp("70%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    backgroundColor: "rgba(52, 167, 112, 1)"
  },
  View_1122_32942: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    backgroundColor: "rgba(70, 189, 132, 1)"
  },
  View_1122_32943: {
    width: wp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1122_32943: {
    color: "rgba(18, 18, 18, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.30000001192092896,
    textTransform: "none"
  },
  View_1122_32944: {
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1122_32944: {
    color: "rgba(18, 18, 18, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.30000001192092896,
    textTransform: "none"
  },
  View_1122_32946: {
    flexGrow: 1,
    width: wp("76%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("24%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I1122_32946_853_252: {
    flexGrow: 1,
    width: wp("39%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I1122_32946_853_253: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I1122_32946_853_254: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_I1122_32946_853_255: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_I1122_32946_853_256: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  ImageBackground_I1122_32946_853_257: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%")
  },
  View_I1122_32946_853_258: {
    flexGrow: 1,
    width: wp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1122_32946_853_258: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.055,
    textTransform: "none"
  },
  View_1122_32947: {
    flexGrow: 1,
    width: wp("76%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("12%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_32947_853_242: {
    flexGrow: 1,
    width: wp("76%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1122_32947_853_242: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.055,
    textTransform: "none"
  },
  View_1122_32948: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    top: hp("5%"),
    backgroundColor: "rgba(230, 67, 91, 1)"
  },
  View_1122_32949: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_1122_32949: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_32950: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("9%")
  },
  View_1122_32951: {
    width: wp("35%"),
    minWidth: wp("35%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1122_32951: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_32952: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_1122_32952: {
    color: "rgba(119, 132, 238, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_32953: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1122_32954: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1122_32955: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1122_32956: {
    width: wp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_1122_32956: {
    color: "rgba(18, 18, 18, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  ImageBackground_1122_32957: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%")
  },
  View_1122_32958: {
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
  View_1122_32959: {
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
  View_1122_32960: {
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
  View_1122_32961: {
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
  Text_1122_32961: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_32962: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("0%")
  },
  View_1122_32963: {
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
  View_1122_32964: {
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
  View_1122_32965: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_1122_32965: {
    color: "rgba(119, 132, 238, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_32995: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1122_32996: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("26%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1122_32997: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1122_32998: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(153, 153, 153, 1)",
    borderWidth: 1
  },
  View_1122_32999: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_32999_878_1321: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1122_32999_878_1321: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_33000: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("0%")
  },
  View_1122_33001: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_1122_33002: {
    flexGrow: 1,
    width: wp("30%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_33002_878_1321: {
    flexGrow: 1,
    width: wp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1122_33002_878_1321: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_33003: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    top: hp("0%")
  },
  View_1122_33004: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_1122_33005: {
    flexGrow: 1,
    width: wp("28%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_33005_878_1321: {
    flexGrow: 1,
    width: wp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1122_33005_878_1321: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_33006: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16%"),
    backgroundColor: "rgba(255, 255, 255, 0)"
  },
  View_1122_33007: {
    width: wp("135%"),
    minWidth: wp("135%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1122_33008: {
    width: wp("135%"),
    minWidth: wp("135%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1122_33009: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_1122_33009: {
    color: "rgba(119, 132, 238, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_33010: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_1122_33010: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_33011: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_1122_33011: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_33012: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("94%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_1122_33012: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_33013: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("121%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_1122_33013: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_33014: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    backgroundColor: "rgba(119, 132, 238, 1)"
  },
  View_1122_33015: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("1%")
  },
  ImageBackground_1122_33016: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1122_33017: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1122_33018: {
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
  Text_1122_33018: {
    color: "rgba(24, 23, 37, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_33019: {
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
  View_1122_33020: {
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
  View_1122_33021: {
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
  ImageBackground_1122_33022: {
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
  View_1122_33023: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_1122_33024: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1122_33028: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1122_33029: {
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
  ImageBackground_1122_33030: {
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
  View_1122_33031: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_1122_33032: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1122_33036: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1122_33037: {
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
  ImageBackground_1122_33038: {
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
  View_1122_33039: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_1122_33040: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1122_33043: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1122_33044: {
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
  ImageBackground_1122_33045: {
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
  ImageBackground_1122_33046: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_1122_33049: {
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
  View_1122_33050: {
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
  ImageBackground_1122_33051: {
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
