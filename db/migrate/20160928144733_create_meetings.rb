class CreateMeetings < ActiveRecord::Migration[5.0]
  def change
    create_table :meetings do |t|
      t.string :topic
      t.date :date
      t.time :time
      t.boolean :repeat_weekly
      t.boolean :repeat_monthly

      t.timestamps
    end
  end
end
