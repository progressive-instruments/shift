add_library(player_controller impl/PlayerController.cpp "impl/generated/note_message.pb.cc")
target_sources( player_controller
  PRIVATE
    IPlayerController.h
    impl/PlayerController.h)

  target_compile_definitions(player_controller PRIVATE
      JUCE_GLOBAL_MODULE_SETTINGS_INCLUDED=1)

target_link_libraries(player_controller
libprotobuf)


 target_include_directories(player_controller 
  PUBLIC 
    . 
    ${PROTOBUF_ROOT_DIR}/src
  PRIVATE
    ../player 
    ../connection
    ../../JUCE/modules
    ../event)

# Tests
add_executable( playerControlTest tests/PlayerControlTest.cpp )
target_link_libraries(playerControlTest connection gtest gtest_main)
add_test( playerControlTest playerControlTest )