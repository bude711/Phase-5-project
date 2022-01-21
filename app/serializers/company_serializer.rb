class CompanySerializer < ActiveModel::Serializer
  attributes :id, :name, :img_url, :edi_statement, :bipoc_info, :gender_info, :lgbtqia_info, :disability_info, :location, :website, :size, :networth

  has_many :reviews
end
