import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const FancyCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <ScrollView horizontal>
        <TouchableOpacity>
          <View style={[styles.card, styles.elevatedCard]}>
            <Image
              source={{
                uri: 'https://www.tourism-of-india.com/blog/wp-content/uploads/2018/07/taj-mahal-agra.jpg',
              }}
              style={styles.cardImage}
            />
            <View style={styles.cardBody}>
              <Text style={styles.cardTitle}>Taj Mahal</Text>
              <Text style={styles.cardLabel}>Agra, UP</Text>
              <Text style={styles.cardDescription}>
                The Taj Mahal (/ˌtɑːdʒ məˈhɑːl, ˌtɑːʒ-/; lit. 'Crown of the
                Palace')[4][5][6] is an ivory-white marble mausoleum on the
                right bank of the river Yamuna in Agra, Uttar Pradesh, India. It
                was commissioned in 1631 by the fifth Mughal emperor, Shah Jahan
                (r. 1628–1658) to house the tomb of his beloved wife, Mumtaz
                Mahal; it also houses the tomb of Shah Jahan himself.
              </Text>
              <Text style={styles.cardFooter}> 12 mins away</Text>
            </View>
          </View>
        </TouchableOpacity>

        <View style={[styles.card, styles.elevatedCard]}>
          <Image
            source={{
              uri: 'https://www.tourism-of-india.com/blog/wp-content/uploads/2018/07/taj-mahal-agra.jpg',
            }}
            style={styles.cardImage}
          />
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Taj Mahal</Text>
            <Text style={styles.cardLabel}>Agra, UP</Text>
            <Text style={styles.cardDescription}>
              The Taj Mahal (/ˌtɑːdʒ məˈhɑːl, ˌtɑːʒ-/; lit. 'Crown of the
              Palace')[4][5][6] is an ivory-white marble mausoleum on the right
              bank of the river Yamuna in Agra, Uttar Pradesh, India. It was
              commissioned in 1631 by the fifth Mughal emperor, Shah Jahan
              (r. 1628–1658) to house the tomb of his beloved wife, Mumtaz
              Mahal; it also houses the tomb of Shah Jahan himself.
            </Text>
            <Text style={styles.cardFooter}> 12 mins away</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default FancyCards;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: '400',
    paddingHorizontal: 15,
  },
  card: {
    width: 350,
    height: 380,
    borderRadius: 8,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  elevatedCard: {
    backgroundColor: '#A8CD9F',
    elevation: 12,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 6,
  },
  cardLabel: {
    fontSize: 14,
    fontWeight: '300',
    marginBottom: 6,
  },
  cardDescription: {
    fontSize: 12,
    marginBottom: 6,
    flexShrink: 1,
  },
  cardFooter: {},
});
