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
      <View style={styles.View_1122_33665} />
      <View style={styles.View_1122_33769}>
        <View style={styles.View_1122_33771}>
          <View style={styles.View_1122_33772} />
          <View style={styles.View_1122_33773}>
            <Text style={styles.Text_1122_33773}>TERITORI</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1122_33782}>
        <View style={styles.View_1122_33783} />
        <View style={styles.View_1122_33784}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e92/c23f/34583c5a26b814cc8beccb8f6cae3998"
            }}
            style={styles.ImageBackground_1122_33785}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f69/0d69/748f381d2d057a0889b33add1f111ada"
            }}
            style={styles.ImageBackground_1122_33786}
          />
        </View>
        <View style={styles.View_1122_33790}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e92/c23f/34583c5a26b814cc8beccb8f6cae3998"
            }}
            style={styles.ImageBackground_1122_33791}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/540c/cdb4/408199b71c29a5b791b1f04cd7405577"
            }}
            style={styles.ImageBackground_1122_33792}
          />
        </View>
        <View style={styles.View_1122_33795}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e92/c23f/34583c5a26b814cc8beccb8f6cae3998"
            }}
            style={styles.ImageBackground_1122_33796}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d9eb/131c/86dbf8f64342db7cc5fd286677a64bea"
            }}
            style={styles.ImageBackground_1122_33797}
          />
        </View>
      </View>
      <View style={styles.View_1122_33800}>
        <View style={styles.View_1122_33801}>
          <View style={styles.View_1122_33802}>
            <Text style={styles.Text_1122_33802}>Statistik</Text>
          </View>
          <View style={styles.View_1122_33803}>
            <Text style={styles.Text_1122_33803}>See all</Text>
          </View>
        </View>
        <View style={styles.View_1122_33804}>
          <View style={styles.View_1122_33805}>
            <View style={styles.View_1122_33806} />
            <View style={styles.View_1122_33807}>
              <Text style={styles.Text_1122_33807}>Buat Tugas</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7295/b977/ba4a9e6fb0616507cebe038b471ab4b8"
            }}
            style={styles.ImageBackground_1122_33808}
          />
        </View>
        <View style={styles.View_1122_33809}>
          <View style={styles.View_1122_33810} />
          <View style={styles.View_1122_33811} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bca3/c2dd/dc48a675fc2386c302f96efd36e70e80"
            }}
            style={styles.ImageBackground_1122_33812}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d7a5/dab9/1e54af010f58167f42cecb006924457d"
            }}
            style={styles.ImageBackground_1122_33813}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/756d/37de/afe6573066dc8759b436b0f6e871ef9e"
            }}
            style={styles.ImageBackground_1122_33814}
          />
          <View style={styles.View_1122_33815}>
            <Text style={styles.Text_1122_33815}>12</Text>
          </View>
          <View style={styles.View_1122_33816}>
            <Text style={styles.Text_1122_33816}>Selesai</Text>
          </View>
          <View style={styles.View_1122_33817}>
            <Text style={styles.Text_1122_33817}>2</Text>
          </View>
          <View style={styles.View_1122_33818}>
            <Text style={styles.Text_1122_33818}>Tidak Selesai</Text>
          </View>
          <View style={styles.View_1122_33819}>
            <Text style={styles.Text_1122_33819}>13</Text>
          </View>
          <View style={styles.View_1122_33820}>
            <Text style={styles.Text_1122_33820}>sedang berlangsung</Text>
          </View>
          <View style={styles.View_1122_33821}>
            <Text style={styles.Text_1122_33821}>27</Text>
          </View>
          <View style={styles.View_1122_33822}>
            <Text style={styles.Text_1122_33822}>Total</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d3a3/1a3b/ad613bcb41facc7eb5511da889ace562"
            }}
            style={styles.ImageBackground_1122_33823}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/431a/5cbe/e46236591cd1c6e634ff27da3333baac"
            }}
            style={styles.ImageBackground_1122_33824}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4527/efcd/c67e34da592a0e8c051289cbd2c52858"
            }}
            style={styles.ImageBackground_1122_33825}
          />
        </View>
      </View>
      <View style={styles.View_1122_33826}>
        <View style={styles.View_1122_33827} />
        <View style={styles.View_1122_33828}>
          <Text style={styles.Text_1122_33828}>Tugas</Text>
        </View>
      </View>
      <View style={styles.View_1122_33829}>
        <View style={styles.View_1122_33830} />
        <View style={styles.View_1122_33831} />
        <View style={styles.View_1122_33832}>
          <Text style={styles.Text_1122_33832}>Anggota</Text>
        </View>
      </View>
      <View style={styles.View_1122_33833} />
      <View style={styles.View_1122_33834}>
        <View style={styles.View_1122_33835}>
          <View style={styles.View_1122_33836} />
          <View style={styles.View_1122_33837}>
            <View style={styles.View_I1122_33837_878_1321}>
              <Text style={styles.Text_I1122_33837_878_1321}>Terbaru</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_1122_33838}>
          <View style={styles.View_1122_33839} />
          <View style={styles.View_1122_33840}>
            <View style={styles.View_I1122_33840_878_1321}>
              <Text style={styles.Text_I1122_33840_878_1321}>
                Tanggal Dibuat
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_1122_33841}>
          <View style={styles.View_1122_33842} />
          <View style={styles.View_1122_33843}>
            <View style={styles.View_I1122_33843_878_1321}>
              <Text style={styles.Text_I1122_33843_878_1321}>
                Teritori Selesai
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1122_33844}>
        <View style={styles.View_1122_33845} />
        <View style={styles.View_1122_33846} />
        <View style={styles.View_1122_33847}>
          <View style={styles.View_I1122_33847_938_1860} />
          <View style={styles.View_I1122_33847_938_1861}>
            <View style={styles.View_I1122_33847_938_1862}>
              <View style={styles.View_I1122_33847_938_1863} />
              <View style={styles.View_I1122_33847_938_1864}>
                <Text style={styles.Text_I1122_33847_938_1864}>Q</Text>
              </View>
            </View>
            <View style={styles.View_I1122_33847_938_1865}>
              <View style={styles.View_I1122_33847_938_1866} />
              <View style={styles.View_I1122_33847_938_1867}>
                <Text style={styles.Text_I1122_33847_938_1867}>Z</Text>
              </View>
            </View>
            <View style={styles.View_I1122_33847_938_1868}>
              <View style={styles.View_I1122_33847_938_1869} />
              <View style={styles.View_I1122_33847_938_1870}>
                <Text style={styles.Text_I1122_33847_938_1870}>X</Text>
              </View>
            </View>
            <View style={styles.View_I1122_33847_938_1871}>
              <View style={styles.View_I1122_33847_938_1872} />
              <View style={styles.View_I1122_33847_938_1873}>
                <Text style={styles.Text_I1122_33847_938_1873}>C</Text>
              </View>
            </View>
            <View style={styles.View_I1122_33847_938_1874}>
              <View style={styles.View_I1122_33847_938_1875} />
              <View style={styles.View_I1122_33847_938_1876}>
                <Text style={styles.Text_I1122_33847_938_1876}>V</Text>
              </View>
            </View>
            <View style={styles.View_I1122_33847_938_1877}>
              <View style={styles.View_I1122_33847_938_1878} />
              <View style={styles.View_I1122_33847_938_1879}>
                <Text style={styles.Text_I1122_33847_938_1879}>B</Text>
              </View>
            </View>
            <View style={styles.View_I1122_33847_938_1880}>
              <View style={styles.View_I1122_33847_938_1881} />
              <View style={styles.View_I1122_33847_938_1882}>
                <Text style={styles.Text_I1122_33847_938_1882}>N</Text>
              </View>
            </View>
            <View style={styles.View_I1122_33847_938_1883}>
              <View style={styles.View_I1122_33847_938_1884} />
              <View style={styles.View_I1122_33847_938_1885}>
                <Text style={styles.Text_I1122_33847_938_1885}>M</Text>
              </View>
            </View>
            <View style={styles.View_I1122_33847_938_1886}>
              <View style={styles.View_I1122_33847_938_1887} />
              <View style={styles.View_I1122_33847_938_1888}>
                <Text style={styles.Text_I1122_33847_938_1888}>A</Text>
              </View>
            </View>
            <View style={styles.View_I1122_33847_938_1889}>
              <View style={styles.View_I1122_33847_938_1890} />
              <View style={styles.View_I1122_33847_938_1891}>
                <Text style={styles.Text_I1122_33847_938_1891}>S</Text>
              </View>
            </View>
            <View style={styles.View_I1122_33847_938_1892}>
              <View style={styles.View_I1122_33847_938_1893} />
              <View style={styles.View_I1122_33847_938_1894}>
                <Text style={styles.Text_I1122_33847_938_1894}>D</Text>
              </View>
            </View>
            <View style={styles.View_I1122_33847_938_1895}>
              <View style={styles.View_I1122_33847_938_1896} />
              <View style={styles.View_I1122_33847_938_1897}>
                <Text style={styles.Text_I1122_33847_938_1897}>F</Text>
              </View>
            </View>
            <View style={styles.View_I1122_33847_938_1898}>
              <View style={styles.View_I1122_33847_938_1899} />
              <View style={styles.View_I1122_33847_938_1900}>
                <Text style={styles.Text_I1122_33847_938_1900}>G</Text>
              </View>
            </View>
            <View style={styles.View_I1122_33847_938_1901}>
              <View style={styles.View_I1122_33847_938_1902} />
              <View style={styles.View_I1122_33847_938_1903}>
                <Text style={styles.Text_I1122_33847_938_1903}>H</Text>
              </View>
            </View>
            <View style={styles.View_I1122_33847_938_1904}>
              <View style={styles.View_I1122_33847_938_1905} />
              <View style={styles.View_I1122_33847_938_1906}>
                <Text style={styles.Text_I1122_33847_938_1906}>J</Text>
              </View>
            </View>
            <View style={styles.View_I1122_33847_938_1907}>
              <View style={styles.View_I1122_33847_938_1908} />
              <View style={styles.View_I1122_33847_938_1909}>
                <Text style={styles.Text_I1122_33847_938_1909}>K</Text>
              </View>
            </View>
            <View style={styles.View_I1122_33847_938_1910}>
              <View style={styles.View_I1122_33847_938_1911} />
              <View style={styles.View_I1122_33847_938_1912}>
                <Text style={styles.Text_I1122_33847_938_1912}>L</Text>
              </View>
            </View>
            <View style={styles.View_I1122_33847_938_1913}>
              <View style={styles.View_I1122_33847_938_1914} />
              <View style={styles.View_I1122_33847_938_1915}>
                <Text style={styles.Text_I1122_33847_938_1915}>W</Text>
              </View>
            </View>
            <View style={styles.View_I1122_33847_938_1916}>
              <View style={styles.View_I1122_33847_938_1917} />
              <View style={styles.View_I1122_33847_938_1918}>
                <Text style={styles.Text_I1122_33847_938_1918}>E</Text>
              </View>
            </View>
            <View style={styles.View_I1122_33847_938_1919}>
              <View style={styles.View_I1122_33847_938_1920} />
              <View style={styles.View_I1122_33847_938_1921}>
                <Text style={styles.Text_I1122_33847_938_1921}>R</Text>
              </View>
            </View>
            <View style={styles.View_I1122_33847_938_1922}>
              <View style={styles.View_I1122_33847_938_1923} />
              <View style={styles.View_I1122_33847_938_1924}>
                <Text style={styles.Text_I1122_33847_938_1924}>T</Text>
              </View>
            </View>
            <View style={styles.View_I1122_33847_938_1925}>
              <View style={styles.View_I1122_33847_938_1926} />
              <View style={styles.View_I1122_33847_938_1927}>
                <Text style={styles.Text_I1122_33847_938_1927}>Y</Text>
              </View>
            </View>
            <View style={styles.View_I1122_33847_938_1928}>
              <View style={styles.View_I1122_33847_938_1929} />
              <View style={styles.View_I1122_33847_938_1930}>
                <Text style={styles.Text_I1122_33847_938_1930}>U</Text>
              </View>
            </View>
            <View style={styles.View_I1122_33847_938_1931}>
              <View style={styles.View_I1122_33847_938_1932} />
              <View style={styles.View_I1122_33847_938_1933}>
                <Text style={styles.Text_I1122_33847_938_1933}>I</Text>
              </View>
            </View>
            <View style={styles.View_I1122_33847_938_1934}>
              <View style={styles.View_I1122_33847_938_1935} />
              <View style={styles.View_I1122_33847_938_1936}>
                <Text style={styles.Text_I1122_33847_938_1936}>O</Text>
              </View>
            </View>
            <View style={styles.View_I1122_33847_938_1937}>
              <View style={styles.View_I1122_33847_938_1938} />
              <View style={styles.View_I1122_33847_938_1939}>
                <Text style={styles.Text_I1122_33847_938_1939}>P</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I1122_33847_938_1940}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/41fd/e5b1/f2c2e47221a802cccced42a412521a53"
              }}
              style={styles.ImageBackground_I1122_33847_938_1941}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f21b/a6b6/66d0be20d51d76e45aebfc56c0cac0d1"
              }}
              style={styles.ImageBackground_I1122_33847_938_1943}
            />
            <View style={styles.View_I1122_33847_938_1945}>
              <View style={styles.View_I1122_33847_938_1946} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d95b/bd42/b7ce436fbb2ba38c1b51da1e50e24b65"
                }}
                style={styles.ImageBackground_I1122_33847_938_1947}
              />
            </View>
            <View style={styles.View_I1122_33847_938_1949}>
              <View style={styles.View_I1122_33847_938_1950} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/08fc/eb7a/ace9c53b9d39b0df2d9ad14134f750d7"
                }}
                style={styles.ImageBackground_I1122_33847_938_1951}
              />
            </View>
            <View style={styles.View_I1122_33847_938_1953}>
              <View style={styles.View_I1122_33847_938_1954} />
              <View style={styles.View_I1122_33847_938_1955}>
                <Text style={styles.Text_I1122_33847_938_1955}>space</Text>
              </View>
            </View>
            <View style={styles.View_I1122_33847_938_1956}>
              <View style={styles.View_I1122_33847_938_1957} />
              <View style={styles.View_I1122_33847_938_1958}>
                <Text style={styles.Text_I1122_33847_938_1958}>return</Text>
              </View>
            </View>
            <View style={styles.View_I1122_33847_938_1959}>
              <View style={styles.View_I1122_33847_938_1960} />
              <View style={styles.View_I1122_33847_938_1961}>
                <Text style={styles.Text_I1122_33847_938_1961}>123</Text>
              </View>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/220c/e56e/6cde3f0827097e0d2517507d13a1e0b7"
          }}
          style={styles.ImageBackground_1122_33848}
        />
        <View style={styles.View_1122_33849}>
          <Text style={styles.Text_1122_33849}>
            Siapa yang ingin Anda Pilih?
          </Text>
        </View>
        <View style={styles.View_1122_33850} />
        <View style={styles.View_1122_33851}>
          <View style={styles.View_1122_33852} />
          <View style={styles.View_1122_33853} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b33/7dc3/b6557e612d880db37259aff5375edf87"
            }}
            style={styles.ImageBackground_1122_33854}
          />
          <View style={styles.View_1122_33855}>
            <Text style={styles.Text_1122_33855}>Tulis disini</Text>
          </View>
          <View style={styles.View_1122_33857}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
              }}
              style={styles.ImageBackground_I1122_33857_938_1986}
            />
            <View style={styles.View_I1122_33857_938_1989}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e35/b394/0b88c67087f688c0bb3b773b192768bb"
                }}
                style={styles.ImageBackground_I1122_33857_938_1990}
              />
            </View>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c94/19cd/32386f60a44d6c49fc07de275f74d9bd"
        }}
        style={styles.ImageBackground_1122_33858}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(244, 244, 244, 1)" },
  View_2: { height: hp("100%") },
  View_1122_33665: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("59%"),
    minHeight: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1122_33769: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1122_33771: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1122_33772: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1122_33773: {
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
  Text_1122_33773: {
    color: "rgba(24, 23, 37, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_33782: {
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
  View_1122_33783: {
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
  View_1122_33784: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("0%")
  },
  ImageBackground_1122_33785: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1122_33786: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  View_1122_33790: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("0%")
  },
  ImageBackground_1122_33791: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1122_33792: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  View_1122_33795: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1122_33796: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1122_33797: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  View_1122_33800: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("68%"),
    minHeight: hp("68%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1122_33801: {
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
  View_1122_33802: {
    width: wp("40%"),
    minWidth: wp("40%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1122_33802: {
    color: "rgba(24, 23, 37, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_33803: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_1122_33803: {
    color: "rgba(119, 132, 238, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_33804: {
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
  View_1122_33805: {
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
  View_1122_33806: {
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
  View_1122_33807: {
    width: wp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_1122_33807: {
    color: "rgba(18, 18, 18, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  ImageBackground_1122_33808: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%")
  },
  View_1122_33809: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17%")
  },
  View_1122_33810: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1122_33811: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_1122_33812: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%")
  },
  ImageBackground_1122_33813: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("0%")
  },
  ImageBackground_1122_33814: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%")
  },
  View_1122_33815: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_1122_33815: {
    color: "rgba(18, 18, 18, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_1122_33816: {
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_1122_33816: {
    color: "rgba(65, 71, 94, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.30000001192092896,
    textTransform: "none"
  },
  View_1122_33817: {
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_1122_33817: {
    color: "rgba(18, 18, 18, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_1122_33818: {
    width: wp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("13%"),
    justifyContent: "flex-start"
  },
  Text_1122_33818: {
    color: "rgba(65, 71, 94, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.30000001192092896,
    textTransform: "none"
  },
  View_1122_33819: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_1122_33819: {
    color: "rgba(18, 18, 18, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_1122_33820: {
    width: wp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("13%"),
    justifyContent: "flex-start"
  },
  Text_1122_33820: {
    color: "rgba(65, 71, 94, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.30000001192092896,
    textTransform: "none"
  },
  View_1122_33821: {
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_1122_33821: {
    color: "rgba(18, 18, 18, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_1122_33822: {
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_1122_33822: {
    color: "rgba(65, 71, 94, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.30000001192092896,
    textTransform: "none"
  },
  ImageBackground_1122_33823: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%")
  },
  ImageBackground_1122_33824: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_1122_33825: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_1122_33826: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%")
  },
  View_1122_33827: {
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
  View_1122_33828: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_1122_33828: {
    color: "rgba(119, 132, 238, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_33829: {
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
  View_1122_33830: {
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
  View_1122_33831: {
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
  View_1122_33832: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_1122_33832: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_33833: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1122_33834: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("17%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1122_33835: {
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
  View_1122_33836: {
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
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_1122_33837: {
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
  View_I1122_33837_878_1321: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1122_33837_878_1321: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_33838: {
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
  View_1122_33839: {
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
  View_1122_33840: {
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
  View_I1122_33840_878_1321: {
    flexGrow: 1,
    width: wp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1122_33840_878_1321: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_33841: {
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
  View_1122_33842: {
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
  View_1122_33843: {
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
  View_I1122_33843_878_1321: {
    flexGrow: 1,
    width: wp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1122_33843_878_1321: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_33844: {
    width: wp("115%"),
    minWidth: wp("115%"),
    height: hp("152%"),
    minHeight: hp("152%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-6%"),
    top: hp("0%")
  },
  View_1122_33845: {
    width: wp("115%"),
    minWidth: wp("115%"),
    height: hp("63%"),
    minHeight: hp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.5
  },
  View_1122_33846: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("100%"),
    minHeight: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("52%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_1122_33847: {
    width: wp("104%"),
    minWidth: wp("104%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("67%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_33847_938_1860: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(206, 210, 217, 0.699999988079071)"
  },
  View_I1122_33847_938_1861: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I1122_33847_938_1862: {
    width: wp("9%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_33847_938_1863: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I1122_33847_938_1864: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I1122_33847_938_1864: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_I1122_33847_938_1865: {
    width: wp("8%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("17%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_33847_938_1866: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I1122_33847_938_1867: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I1122_33847_938_1867: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_I1122_33847_938_1868: {
    width: wp("8%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("17%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_33847_938_1869: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I1122_33847_938_1870: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I1122_33847_938_1870: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_I1122_33847_938_1871: {
    width: wp("8%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("17%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_33847_938_1872: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I1122_33847_938_1873: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I1122_33847_938_1873: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_I1122_33847_938_1874: {
    width: wp("9%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("17%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_33847_938_1875: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I1122_33847_938_1876: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I1122_33847_938_1876: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_I1122_33847_938_1877: {
    width: wp("9%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("17%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_33847_938_1878: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I1122_33847_938_1879: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I1122_33847_938_1879: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_I1122_33847_938_1880: {
    width: wp("9%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("17%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_33847_938_1881: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I1122_33847_938_1882: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I1122_33847_938_1882: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_I1122_33847_938_1883: {
    width: wp("9%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("17%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_33847_938_1884: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I1122_33847_938_1885: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I1122_33847_938_1885: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_I1122_33847_938_1886: {
    width: wp("8%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("9%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_33847_938_1887: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I1122_33847_938_1888: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I1122_33847_938_1888: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_I1122_33847_938_1889: {
    width: wp("8%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("9%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_33847_938_1890: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I1122_33847_938_1891: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I1122_33847_938_1891: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_I1122_33847_938_1892: {
    width: wp("8%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("9%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_33847_938_1893: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I1122_33847_938_1894: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I1122_33847_938_1894: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_I1122_33847_938_1895: {
    width: wp("9%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("9%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_33847_938_1896: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I1122_33847_938_1897: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I1122_33847_938_1897: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_I1122_33847_938_1898: {
    width: wp("9%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("9%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_33847_938_1899: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I1122_33847_938_1900: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I1122_33847_938_1900: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_I1122_33847_938_1901: {
    width: wp("9%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("9%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_33847_938_1902: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I1122_33847_938_1903: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I1122_33847_938_1903: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_I1122_33847_938_1904: {
    width: wp("9%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("9%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_33847_938_1905: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I1122_33847_938_1906: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I1122_33847_938_1906: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_I1122_33847_938_1907: {
    width: wp("9%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("9%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_33847_938_1908: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I1122_33847_938_1909: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I1122_33847_938_1909: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_I1122_33847_938_1910: {
    width: wp("9%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("9%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_33847_938_1911: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I1122_33847_938_1912: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I1122_33847_938_1912: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_I1122_33847_938_1913: {
    width: wp("9%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_33847_938_1914: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I1122_33847_938_1915: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I1122_33847_938_1915: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_I1122_33847_938_1916: {
    width: wp("9%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_33847_938_1917: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I1122_33847_938_1918: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I1122_33847_938_1918: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_I1122_33847_938_1919: {
    width: wp("9%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_33847_938_1920: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I1122_33847_938_1921: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I1122_33847_938_1921: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_I1122_33847_938_1922: {
    width: wp("9%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_33847_938_1923: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I1122_33847_938_1924: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I1122_33847_938_1924: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_I1122_33847_938_1925: {
    width: wp("9%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_33847_938_1926: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I1122_33847_938_1927: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I1122_33847_938_1927: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_I1122_33847_938_1928: {
    width: wp("9%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_33847_938_1929: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I1122_33847_938_1930: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I1122_33847_938_1930: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_I1122_33847_938_1931: {
    width: wp("8%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_33847_938_1932: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I1122_33847_938_1933: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I1122_33847_938_1933: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_I1122_33847_938_1934: {
    width: wp("8%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_33847_938_1935: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I1122_33847_938_1936: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I1122_33847_938_1936: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_I1122_33847_938_1937: {
    width: wp("9%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_33847_938_1938: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I1122_33847_938_1939: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I1122_33847_938_1939: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_I1122_33847_938_1940: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("17%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I1122_33847_938_1941: {
    width: wp("12%"),
    height: hp("6%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%")
  },
  ImageBackground_I1122_33847_938_1943: {
    width: wp("12%"),
    height: hp("6%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_I1122_33847_938_1945: {
    width: wp("11%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_33847_938_1946: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(174, 179, 190, 1)",
    overflow: "hidden"
  },
  ImageBackground_I1122_33847_938_1947: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I1122_33847_938_1949: {
    width: wp("11%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_33847_938_1950: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(174, 179, 190, 1)",
    overflow: "hidden"
  },
  ImageBackground_I1122_33847_938_1951: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I1122_33847_938_1953: {
    width: wp("49%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_33847_938_1954: {
    flexGrow: 1,
    width: wp("49%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I1122_33847_938_1955: {
    flexGrow: 1,
    width: wp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I1122_33847_938_1955: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.32,
    textTransform: "none"
  },
  View_I1122_33847_938_1956: {
    width: wp("23%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_33847_938_1957: {
    flexGrow: 1,
    width: wp("23%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(174, 179, 190, 1)",
    overflow: "hidden"
  },
  View_I1122_33847_938_1958: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I1122_33847_938_1958: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.32,
    textTransform: "none"
  },
  View_I1122_33847_938_1959: {
    width: wp("23%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_33847_938_1960: {
    flexGrow: 1,
    width: wp("23%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(174, 179, 190, 1)",
    overflow: "hidden"
  },
  View_I1122_33847_938_1961: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I1122_33847_938_1961: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.32,
    textTransform: "none"
  },
  ImageBackground_1122_33848: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("83%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%")
  },
  View_1122_33849: {
    width: wp("83%"),
    minWidth: wp("83%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("57%"),
    justifyContent: "flex-start"
  },
  Text_1122_33849: {
    color: "rgba(21, 20, 31, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_33850: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("50%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1122_33851: {
    width: wp("96%"),
    minWidth: wp("96%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("56%")
  },
  View_1122_33852: {
    width: wp("96%"),
    minWidth: wp("96%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(222, 222, 222, 1)",
    borderWidth: 0.5
  },
  View_1122_33853: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("1%"),
    backgroundColor: "rgba(119, 132, 238, 1)"
  },
  ImageBackground_1122_33854: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%")
  },
  View_1122_33855: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_1122_33855: {
    color: "rgba(124, 131, 146, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.15000000596046448,
    textTransform: "none"
  },
  View_1122_33857: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I1122_33857_938_1986: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1122_33857_938_1989: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I1122_33857_938_1990: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1122_33858: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
