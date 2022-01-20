class Api::CompaniesController < ApplicationController

    def index 
        companies = Company.all 
        render json: companies
    end

    def show 
        company = find_params
        render json: company
    end
    
    def create 
        company = Company.create!(create_params)
        render json: company, status: :created 
    end

    def destroy
        company = find_params
        company.destroy
        head :no_content
    end

    def update 
        company = Company.find_by(id: params[:id])
        company.update(create_params)
        render json: company 
    end


private 

    def create_params 
        params.permit(:name, :edi_statement, :bipoc_info, :gender_info, :lgbtqia_info, :disability_info, :location, :website, :size, :networth)
    end


    def find_params
    Company.find(params[:id])
    end

end
