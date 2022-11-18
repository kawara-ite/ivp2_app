class IndicatedValue < ApplicationRecord
  has_one_attached :image

  with_options presence: true do
    validates :equipment_number
    validates :instrument_type
    validates :instruction
  end
end
