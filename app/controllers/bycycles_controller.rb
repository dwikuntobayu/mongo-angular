class BycyclesController < ApplicationController
  before_action :get_all_data, only: [:index, :create, :update, :destroy]

  def index
    #debugger
  end

  def new
    respond_to do |f|
      f.js{@bycycle = Bycycle.new}
    end
  end

  def create
    @bycycle = Bycycle.new(params_bycycle)
    respond_to do |f|
      if @bycycle.save
        f.js{flash[:notice] = "Bycycles Record Success Created"}
      else
        f.js{flash[:error] = "Bycycles Record Fails Created"}
      end
    end
  end

  def show
    respond_to do |f|
      f.js{@bycycle = Bycycle.find(params[:id])}
    end
  end

  def edit
    respond_to do |f|
      f.js{@bycycle = Bycycle.find(params[:id])}
    end
  end

  def update
    @bycycle = Bycycle.find(params[:id])
    respond_to do |f|
      if @bycycle.update_attributes(params_bycycle)
        f.js{flash[:notice] = "Success update a record"}
      else
        f.js{flash[:error] = "Fails update a record"}
      end
    end
  end

  def destroy
    @bycycle = Bycycle.find(params[:id])
    respond_to do |f|
      if @bycycle.destroy
        f.js{flash[:notice] = "Success delete a record"}
      else
        f.js{flash[:error] = "Fails delete a record"}
      end
    end
  end

  def get_all_data
    @bycycles = Bycycle.all
  end

  private
    def params_bycycle
      params.require(:bycycle).permit(:brand, :category, :serial_model, :name, :stock, :status)
    end
end
