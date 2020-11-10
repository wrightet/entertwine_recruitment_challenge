class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :email, null: false
      t.integer :phone_number, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
    end
    add_index :users, :email
    add_index :users, :phone_number
    add_index :users, :session_token
  end
end
