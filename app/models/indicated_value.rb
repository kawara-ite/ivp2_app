class IndicatedValue < ApplicationRecord

  with_options presence: true do
    validates :equipment_number
    validates :instrument_type
    validates :instruction
  end
end
