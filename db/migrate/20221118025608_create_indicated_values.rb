class CreateIndicatedValues < ActiveRecord::Migration[6.0]
  def change
    create_table :indicated_values do |t|
      t.string :equipment_number, null: false
      t.text :instrument_type, null: false
      t.string :instruction, null: false
      t.timestamps
    end
  end
end
