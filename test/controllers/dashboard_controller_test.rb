require "test_helper"

class DashboardControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get dashboard_index_url
    assert_response :success
  end

  test "should get about" do
    get dashboard_about_url
    assert_response :success
  end

  test "should get contact" do
    get dashboard_contact_url
    assert_response :success
  end
end
