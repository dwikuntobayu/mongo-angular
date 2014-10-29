class Api::AngularbycyclesController < ApplicationController
  respond_to :json

  def index
    bycycle_limit = params[:limit].blank? ? nil : params[:limit].to_i
    bycycle_offset = params[:offset].blank? ? nil : params[:offset].to_i
    if not bycycle_limit.blank? and bycycle_limit.integer? and bycycle_offset.blank?
      response = Bycycle.limit(bycycle_limit)
    end
    if not bycycle_limit.blank? and bycycle_limit.integer? and not bycycle_offset.blank? and bycycle_offset.integer?
      response = Bycycle.offset(bycycle_offset).limit(bycycle_limit)
    end
    if bycycle_limit.blank? and bycycle_offset.blank?
      response = Bycycle.all
    end

    render :status => 200, :json => { :bycycles => response }
  end

  def show
    bycycle = Bycycle.find(params[:id])
    if bycycle
      render :status => 200, :json => {:status => 1, :message => "OK", :bycycle => bycycle}
    else
      render :status => 500, :json => {:status => 0, :message => "not found"}
    end
  end

  def update
    bycycle_brand = params[:brand]
    bycycle = Bycycle.find(params[:id])
     if bycycle.update_attribute("brand", bycycle_brand)
    #debugger
    #if bycycle.update_attributes(params_bycycle)
      render :status => 200, :json => {:status => 1, :message => "OK"}
    else
      render :status => 500, :json => {:status => 0, :message => "failed"}
    end
  end

  private
    def params_bycycle
      params.require(:bycycle).permit(:brand, :category, :serial_model, :name, :stock, :status)
    end

end
