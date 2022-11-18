class IndicatedValuesController < ApplicationController
  def index
  end

  def new
    @indicated_value = IndicatedValue.new
  end

  def create
    @indicated_value = IndicatedValue.new(indicated_value_params)
    if @indicated_value.save
      redirect_to new_indicated_value_path
    else
      render :new
    end
  end

  private

  def indicated_value_params
    params.require(:indicated_value).permit(:equipment_number, :instrument_type, :instruction, :image)
  end
end
