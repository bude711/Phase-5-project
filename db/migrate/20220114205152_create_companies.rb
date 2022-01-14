class CreateCompanies < ActiveRecord::Migration[6.1]
  def change
    create_table :companies do |t|
      t.string :name
      t.string :edi_statement
      t.string :bipoc_info
      t.string :gender_info
      t.string :lgbtqia_info
      t.string :disability_info
      t.string :location
      t.string :website
      t.string :size
      t.string :networth

      t.timestamps
    end
  end
end
