class AddLocationToMeeting < ActiveRecord::Migration[5.0]
  def change
    add_column :meetings, :location, :string
  end
end
