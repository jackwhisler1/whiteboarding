class Card
  attr_accessor :suit, :name, :value

  def initialize(suit, name, value)
    @suit, @name, @value = suit, name, value
  end
end

class Deck
  attr_accessor :playable_cards
  SUITS = [:hearts, :diamonds, :spades, :clubs]
  NAME_VALUES = {
    :two   => 2,
    :three => 3,
    :four  => 4,
    :five  => 5,
    :six   => 6,
    :seven => 7,
    :eight => 8,
    :nine  => 9,
    :ten   => 10,
    :jack  => 10,
    :queen => 10,
    :king  => 10,
    :ace   => [11, 1]}

  def initialize
    shuffle
  end

  def deal_card
    random = rand(@playable_cards.size)
    @playable_cards.delete_at(random)
  end

  def shuffle
    @playable_cards = []
    SUITS.each do |suite|
      NAME_VALUES.each do |name, value|
        @playable_cards << Card.new(suite, name, value)
      end
    end
  end
end

class Hand
  attr_accessor :cards

  def initialize
    @cards = []
  end

  def total_value
    total = 0
    @cards.each do |card|
    if card.name == :ace
      card.value = 11
    end
      total = total + card.value
    end
    return total
  end
end

card = Card.new("spades", "three", 3)
# p card
deck = Deck.new()

player_hand = Hand.new()
dealer_hand = Hand.new()

player_hand.cards << deck.deal_card
player_hand.cards << deck.deal_card

dealer_hand.cards << deck.deal_card
dealer_hand.cards << deck.deal_card

# p player_hand.cards 
# p dealer_hand.cards[0].value
p player_hand
p player_hand.total_value
p "Hit or stay? 1 for hit, 2 for stay."
decision = gets.chomp.to_i
p decision

if decision == 1
  player_hand.cards << deck.deal_card
  p player_hand
  p player_hand.total_value
elsif decision == 2
  p player_hand
  p player_hand.total_value
else
  p "I said 1 or 2."
end

p player_hand.cards 
p dealer_hand.total_value

require 'test/unit'

# class CardTest < Test::Unit::TestCase
#   def setup
#     @card = Card.new(:hearts, :ten, 10)
#   end
  
#   def test_card_suit_is_correct
#     assert_equal @card.suit, :hearts
#   end

#   def test_card_name_is_correct
#     assert_equal @card.name, :ten
#   end
#   def test_card_value_is_correct
#     assert_equal @card.value, 10
#   end
# end

# class DeckTest < Test::Unit::TestCase
#   def setup
#     @deck = Deck.new
#   end
  
#   def test_new_deck_has_52_playable_cards
#     assert_equal @deck.playable_cards.size, 52
#   end
  
#   # def test_dealt_card_should_not_be_included_in_playable_cards
#   #   card = @deck.deal_card
#   #   assert(@deck.playable_cards.include?(card))
#   # end

#   # def test_shuffled_deck_has_52_playable_cards
#   #   @deck.shuffle
#   #   assert_equal @deck.playable_cards.size, 52
#   # end
# end