class Bycycle
  include Mongoid::Document
  include Mongoid::Timestamps
  field :brand, type: String
  field :category, type: String
  field :serial_model, type: String
  field :name, type: String
  field :stock, type: Integer
  field :status, type: String

  validates :brand, length: {minimum: 4}
  validates :category, presence: true
  validates :serial_model, length: {minimum: 4}, uniqueness: true
  validates :name, length: {minimum: 4}
  validates :stock, presence: true, numericality: { only_integer: true }
  validates :status, presence: true
end
